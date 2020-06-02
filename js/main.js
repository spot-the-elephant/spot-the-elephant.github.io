function playPause(btn,vid){
	var vid = document.getElementById("birth-voice");
	if(vid.paused){
		vid.play();
		btn.innerHTML = "Pause";
	} else {
		vid.pause();
		btn.innerHTML = "Play";
	}
}

           
    













