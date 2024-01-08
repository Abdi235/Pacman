let gameMusic = document.getElementById("gameMusic");
let startMusicButton = document.getElementById("startMusicButton");

window.onload = function () {
  // Set up button click event
  startMusicButton.addEventListener("click", startBackgroundMusic);

  // ... Your existing code ...

  document.addEventListener("keydown", moveBird);
};

function startBackgroundMusic() {
  // Play the game music when the button is clicked
  gameMusic.play();
  // Disable the button once the music starts to avoid multiple starts
  startMusicButton.disabled = true;
}
