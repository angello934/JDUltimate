var prevply = document.getElementById("playback-prev");
function sele(){
    document.getElementById("prvw").classList.remove('menu');
    document.getElementById("coachimg").setAttribute('onclick', 'start()');
    document.getElementById("playback-prev").play();
    document.getElementById("playback-prev").style.opacity = "0%"
    document.getElementById("playback-prev").style.display = "none"
}

function desele(){
    document.getElementById("prvw").classList.add('menu');
    document.getElementById("coachimg").removeAttribute('onclick');
    document.getElementById("playback-prev").play();
    document.getElementById("playback-prev").style.opacity = "100%"
    document.getElementById("playback-prev").style.display = "block"

}