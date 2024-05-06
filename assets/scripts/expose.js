// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelector = document.getElementById('horn-select');
  let hornImage = document.querySelector('img');
  let sound = document.querySelector('audio');
  hornSelector.addEventListener('change', function () {
    let hornType = hornSelector.value;
    switch (hornType) {
      case "air-horn":
        hornImage.src = "assets/images/air-horn.svg";
        sound.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        hornImage.src = "assets/images/car-horn.svg";
        sound.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        hornImage.src = "assets/images/party-horn.svg";
        sound.src = "assets/audio/party-horn.mp3";
        break;
      default:
        hornImage.src = "assets/images/no-image.png";
        sound.src = "";
        break;
    }
  })

  let volumeSlider = document.getElementById('volume');
  let volumeImage = document.querySelector('#volume-controls img');
  volumeSlider.addEventListener('input', function () {
    let volumeValue = volumeSlider.value;
    sound.volume = volumeValue/100;
    if (volumeValue == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
      volumeImage.alt = "Volume level 0";
    }
    else if (volumeValue > 0 && volumeValue < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
      volumeImage.alt = "Volume level 1";
    }
    else if (volumeValue >= 33 && volumeValue <= 66) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
      volumeImage.alt = "Volume level 2";
    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
      volumeImage.alt = "Volume level 3";
    }
  })

  let play = document.querySelector('button');
  play.addEventListener('click', function () {
    sound.play();
    if (hornSelector.value == 'party-horn') {
      let confetti = new JSConfetti();
      confetti.addConfetti();
    }
  })
}