var bg_sound = document.getElementById("bg-sound");
function sele(){
    document.getElementById("prvw").classList.remove('menu');
    document.getElementById("coachimg").setAttribute('onclick', 'start()');
    bg_sound.play();
    document.getElementById("playback-prev").style.opacity = "0%"
}

function desele(){
    document.getElementById("prvw").classList.add('menu');
    document.getElementById("coachimg").removeAttribute('onclick');
    bg_sound.play();
    document.getElementById("playback-prev").style.opacity = "100%"

}