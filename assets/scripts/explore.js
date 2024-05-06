// explore.js

window.addEventListener('DOMContentLoaded', init);
function init() {
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const synth = window.speechSynthesis;
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  function onClick() {
    voices = synth.getVoices();
    const text = document.getElementById('text-to-speak').value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const voiceOpt = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceOpt) {
        utterThis.voice = voices[i];
      }
    }
    let face = document.querySelector('img');
    face.src = '../images/smiling-open.png';
    utterThis.onend = function() {
      face.src = '../images/smiling.png';
    };
    synth.speak(utterThis);
  }
  button.addEventListener('click', onClick);
}