const gameMusic = document.getElementById("gameMusic");

// To play the music
function playGameMusic() {
  gameMusic.play();
}

// To pause the music
function pauseGameMusic() {
  gameMusic.pause();
}

gameMusic.volume = 0.8; // Adjust volume (0.0 to 1.0)
gameMusic.loop = true; // Enable loop

// Add this to your game initialization logic
// playGameMusic(); // Commented out to initiate playback on button click

// Example: Initiate playback on button click
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", () => {
  playGameMusic();
});
