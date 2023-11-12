const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

player.on('timeupdate', function (data) {
  console.log('Current time played:', data.seconds, 'seconds');
  console.log('Duration:', data.duration, 'seconds');
  console.log('Percent played:', data.percent * 100, '%');
});
