const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', function (data) {
  // Zapisz aktualny czas odtwarzania w Local Storage
  saveCurrentTimeToLocalStorage(data.seconds);

  console.log('Current time played:', data.seconds, 'seconds');
  console.log('Duration:', data.duration, 'seconds');
  console.log('Percent played:', data.percent * 100, '%');
});

// Funkcja do zapisywania czasu odtwarzania w Local Storage
function saveCurrentTimeToLocalStorage(currentTime) {
  localStorage.setItem('videoplayer-current-time', currentTime);
}

// Funkcja do pobierania czasu odtwarzania z Local Storage
function getCurrentTimeFromLocalStorage() {
  const storedTime = localStorage.getItem('videoplayer-current-time');

  // return storedTime ? parseFloat(storedTime) : 0;

  // alternative code below
  if (storedTime) {
    return parseFloat(storedTime);
  } else {
    return 0;
  }
}

// Funkcja do wznowienia odtwarzania od zapisanego momentu
function resumePlayback() {
  const storedTime = getCurrentTimeFromLocalStorage();
  player.setCurrentTime(storedTime);
}

// Wznowienie odtwarzania od zapisanego momentu po przeładowaniu strony
resumePlayback();
