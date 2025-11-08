const video = document.getElementById('bg-video');

let direction = 1;
let playing = true;

video.playbackRate = 1;

video.addEventListener('play', () => {
  playing = true;
});

video.addEventListener('pause', () => {
  playing = false;
});

function loopBackAndForth() {
  if (!playing) {
    requestAnimationFrame(loopBackAndForth);
    return;
  }

  if (direction === 1) {
    if (video.currentTime >= video.duration) {
      direction = -1;
    } else {
      video.currentTime += 0.04;
    }
  } else {
    if (video.currentTime <= 0) {
      direction = 1;
    } else {
      video.currentTime -= 0.04;
    }
  }

  requestAnimationFrame(loopBackAndForth);
}

video.addEventListener('loadedmetadata', () => {
  video.currentTime = 0;
  video.play();
  loopBackAndForth();
});
