const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",(function(e){var o;o=e.seconds,localStorage.setItem("videoplayer-current-time",o),console.log("Current time played:",e.seconds,"seconds"),console.log("Duration:",e.duration,"seconds"),console.log("Percent played:",100*e.percent,"%")})),function(){const e=function(){const e=localStorage.getItem("videoplayer-current-time");return e?parseFloat(e):0}();o.setCurrentTime(e)}();
//# sourceMappingURL=02-video.10984011.js.map
