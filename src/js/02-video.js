import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const throttledTimeUpdateHandler = throttle(function (data) {
  const currentTime = data.seconds;

  saveCurrentTimeToLocalStorage(currentTime);
  console.log('Current time played:', currentTime, 'seconds');
  console.log('Duration:', data.duration, 'seconds');
  console.log('Percent played:', data.percent * 100, '%');
}, 1000);

player.on('timeupdate', throttledTimeUpdateHandler);

function saveCurrentTimeToLocalStorage(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}

function getCurrentTimeFromLocalStorage() {
  const storedTime = localStorage.getItem('videoplayer-current-time');

  if (storedTime) {
    return parseFloat(storedTime);
  } else {
    return 0;
  }
}

function resumePlayback() {
  const storedTime = getCurrentTimeFromLocalStorage();
  player.setCurrentTime(storedTime);
}

resumePlayback();
