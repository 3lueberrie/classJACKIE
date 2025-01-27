// Show a greeting when the page loads
document.addEventListener('DOMContentLoaded', () => {
  alert('Welcome to Global Music World! Dive into the beats and rhythm of the world.');
});

// Music Player Functionality
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');

// Simulate playing music
playButton.addEventListener('click', () => {
  alert('Playing music...');
});

// Simulate pausing music
pauseButton.addEventListener('click', () => {
  alert('Music paused.');
});

// Simulate skipping to the next track
nextButton.addEventListener('click', () => {
  alert('Next track playing...');
});

// Button Animation
const exploreButton = document.getElementById('explore-btn');
exploreButton.addEventListener('mouseover', () => {
  exploreButton.style.transform = 'scale(1.2)';
  exploreButton.style.transition = 'transform 0.3s ease';
});

exploreButton.addEventListener('mouseleave', () => {
  exploreButton.style.transform = 'scale(1)';
});

