var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "<img alt='pause' src='images/pause.png' height='35px' width='35px'><br>Pause";
	} else {
        vid.pause();
        pauseButton.innerHTML = "<img alt='play' src='images/play.png' height='35px' width='35px'><br>&nbsp;Play";
	}
})