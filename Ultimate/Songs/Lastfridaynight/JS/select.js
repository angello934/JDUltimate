var prevply = document.getElementById("playback-prev");
function sele(){
    document.getElementById("prvw").classList.remove('menu');
    document.getElementById("coachimg").setAttribute('onclick', 'start()');
    prevply.play();
    document.getElementById("playback-prev").style.opacity = "0%"
}

function desele(){
    document.getElementById("prvw").classList.add('menu');
    document.getElementById("coachimg").removeAttribute('onclick');
    prevply.play();
    document.getElementById("playback-prev").style.opacity = "100%"

}
