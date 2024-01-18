const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Play pause video
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
video.addEventListener("click", playPause);
play.addEventListener("click", playPause);

// ==================================

// Update icon
function updateIcon() {
  if (video.paused) {
    play.innerHTML = `<i class="fa fa-play fa-2x"></>`;
  } else {
    play.innerHTML = `<i class="fa fa-pause fa-2x"></>`;
  }
}
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);

// =======================

// Stop play
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}
stop.addEventListener("click", stopVideo);

// ===============

// Progressbar
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.innerHTML = `${minutes}:${seconds}`;
}

function setProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}
video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("click", setProgress);
