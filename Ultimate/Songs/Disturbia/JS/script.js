//      
    //fin del video
        var fin = 241500;
        
    //delay para comenzar el video
        var delay = 2300;
        
    //inicio del video
        var inicio = 0;
        
    //beats por minutos (minetras menos sea el beat, más rapido será)
        var BPM = 57.1;
        
    //aparicion del hud
        var starthud = 4700;
        
    //números de coach 1 / 2 / 3-4
        var numcoachs = "1";
        


//_______________________________________________________________________________________________________________________________________________//




// Videos

    // Coreo
    var playback = document.getElementById("playback");
    var playbackctn = document.getElementById("playbackctn");

    // intro/outro
    var intro = document.getElementById("intro");
    var introctn = document.getElementById("introctn");

    var outro = document.getElementById("outro");
    var outroctn = document.getElementById("outroctn");

    //Goldmove
    var goldm = document.getElementById("gold");
    var goldm1 = document.getElementById("gold1");
    var goldm2 = document.getElementById("gold2");
    var goldm3 = document.getElementById("gold3");
    var goldm4 = document.getElementById("gold4");

    var goldmctn = document.getElementById("goldctn");



// hud
var hudf = document.getElementById('hud');
    var listapictos = document.getElementById('listapicto');
//Carga
var prvws = document.getElementById('prvw');
//Contador
var cntador = document.getElementById('contador');
var nameart = document.getElementById('name');




//Coreo+intro+outro+gold
var vdoctn = document.getElementById('videoctn');



// Fondo2
var bg2_sound = document.getElementById("bg-2-sound");
// Fondo
var bg_sound = document.getElementById("bg-sound");

var pictogramas = document.getElementsByClassName('imgpictocl')


var btln = document.getElementById("Beatline");

var BPS = BPM/60

var imagendelCoach = document.getElementById("coachimg");
var fondobg = document.getElementById("fondoprv");

function cargadedocumento(){
    imagendelCoach.style.animation = "beatimg " + BPS/2 + "s infinite alternate";
    // fondobg.style.animation = "beatbkg " + BPS/2 + "s infinite alternate";
}


document.addEventListener('DOMContentLoaded', cargadedocumento, false)



    function none (nonen){
    nonen.style.display = "none";
    }


    function start(){
        playback.play();
        var dur = playback.duration;
        var iniciaren = (inicio*100)/dur;
        document.getElementById("playback-prev").pause();
        playback.currentTime = iniciaren;

        setTimeout(function(){
            hudf.style.removeProperty ("display");
            hudf.style.animation = "display 1.2s forwards";

        },starthud)
        prvws.style.animation = "display reverse 0.25s forwards";
        intro.play();
        document.body.style.cursor = "none"
        bg_sound.pause();
        
        introctn.style.removeProperty ("display");
        playbackctn.style.removeProperty ("display");
        listapictos.style.removeProperty ("display");
        setTimeout(function(){
            intro.style.animation = "introvdo 1.5s forwards";
            setTimeout(function(){
                none(introctn);
                none(prvws);
            },1500)

        },600)

        setTimeout(function(){
            btln.style.animation = "beat alternate ease-out infinite " + BPS/4 + "s"
        },310)

    };


    function millscnd(){

        var time = playback.currentTime;
        var milli_seconds = parseInt(time * 1000);

        // var pContador = document.getElementById('contador');

        // pContador.textContent = milli_seconds;

        // console.log(milli_seconds);

        return milli_seconds
    };


    function pictoStar(pictodelayy, pictocodd){
    var pictocod = pictocodd;
    var pictodelay = pictodelayy - delay;
    var Pictoxx = document.getElementById(pictocod);
    var allPicto = document.querySelector("#" + pictocod +" img");

    allPicto.style.animation = "beatpicto " + BPS/2 + "s infinite alternate";

    if(pictodelay< millscnd() && pictodelay + 1000 > millscnd() ){
        // Pictoxx.style.removeProperty('display');
        Pictoxx.style.animation = "pictoAnimate" + numcoachs + " linear 2.5s";
        setTimeout(function(){
            Pictoxx.style.removeProperty('animation');
            // none(Pictoxx); 
        },2500)
    };
    };


    function GoldMove(GldMvv){
        var GldMv = GldMvv - 2283

        if(GldMv< millscnd() && GldMv + 1000 > millscnd() ){
            // goldmctn.style.removeProperty('display');
            goldm.style.removeProperty('display');
            goldm.play();

            setTimeout(function(){
                none(goldm);
                goldm1.style.removeProperty('display');
                goldm1.play();

                setTimeout(function(){
                    none(goldm1);
                    },3155)
            },2283)
        };
    };

    function GoldMoveplus2(GldMv){
        if(GldMv< millscnd() && GldMv + 1000 > millscnd() ){
            goldm2.style.removeProperty('display');
            goldm2.play();
            setTimeout(function(){
                none(goldm2);
                },3155)
        }
    };

    function GoldMoveplus3(GldMv){
        if(GldMv< millscnd() && GldMv + 1000 > millscnd() ){
            goldm3.style.removeProperty('display');
            goldm3.play();
            setTimeout(function(){
                none(goldm3);
                },3155)
        }
    };

    function GoldMoveplus4(GldMv){
        if(GldMv< millscnd() && GldMv + 1000 > millscnd() ){
            goldm4.style.removeProperty('display');
            goldm4.play();
            setTimeout(function(){
                none(goldm4);
                },3155)
        }
    };

    function End(){
        if(fin< millscnd() && fin + 1000 > millscnd() ){
            outroctn.style.removeProperty('display');
            outro.style.animation = "outrovdo 0.5s forwards";
            outro.play();
            hudf.style.animation = "outrovdo 0.5s reverse forwards";

            setTimeout(function(){
                none(vdoctn);
                none(hudf);
                none(prvws);
                none(cntador);
                bg2_sound.play();
                document.body.style.cursor = "url(https://angello934.github.io/jd/cursor.png),auto"
            },2100)
        }
    };


function pictocompi(){

        
        // pictoStar(milisegudo, "pct" + codigo pictograma (3 cifras));
        // GoldMove(milisegundos);
        // GoldMoveplus2(milisegundo); (usar para el segundo goldmove seguido)
        // GoldMoveplus3(milisegundo); (usar para el tercer goldmove seguido)
        // GoldMoveplus4(milisegundo); (usar para el cuarto goldmove seguido)

        millscnd();

        End();

        GoldMove(82000);
        GoldMove(158900);
        GoldMove(187850);
        
        pictoStar(7583, "pct015");
        pictoStar(9460, "pct008");
        pictoStar(11401, "pct014");
        pictoStar(13268, "pct007");
        pictoStar(15295, "pct015");
        pictoStar(17097, "pct008");
        pictoStar(19092, "pct014");
        pictoStar(21034, "pct007");
        pictoStar(22964, "pct034");
        pictoStar(23358, "pct035");
        pictoStar(24629, "pct036");
        pictoStar(26697, "pct034");
        pictoStar(27209, "pct035");
        pictoStar(28394, "pct036");
        pictoStar(30558, "pct034");
        pictoStar(31050, "pct035");
        pictoStar(32233, "pct036");
        pictoStar(34387, "pct034");
        pictoStar(34921, "pct035");
        pictoStar(36147, "pct036");
        pictoStar(38803, "pct030");
        pictoStar(39669, "pct029");
        pictoStar(46399, "pct030");
        pictoStar(50314, "pct006");
        pictoStar(51231, "pct003");
        pictoStar(53619, "pct037");
        pictoStar(54153, "pct001");
        pictoStar(55529, "pct018");
        pictoStar(56031, "pct020");
        pictoStar(56521, "pct019");
        pictoStar(56991, "pct020d");
        pictoStar(57523, "pct037");
        pictoStar(58004, "pct001");
        pictoStar(59347, "pct018");
        pictoStar(59893, "pct020");
        pictoStar(60403, "pct019");
        pictoStar(61279, "pct037");
        pictoStar(61822, "pct001");
        pictoStar(63188, "pct018");
        pictoStar(63636, "pct020");
        pictoStar(64178, "pct019");
        pictoStar(64553, "pct020d");
        pictoStar(65107, "pct024");
        pictoStar(66313, "pct012");
        pictoStar(68916, "pct021");
        pictoStar(71102, "pct023");
        pictoStar(72755, "pct021");
        pictoStar(74996, "pct023");
        pictoStar(76520, "pct021");
        pictoStar(78836, "pct023");
        pictoStar(80403, "pct021");
        pictoStar(82335, "pct009");
        pictoStar(84383, "pct015");
        pictoStar(86260, "pct008");
        pictoStar(88201, "pct014");
        pictoStar(90068, "pct007");
        pictoStar(92095, "pct015");
        pictoStar(93897, "pct008");
        pictoStar(95892, "pct014");
        pictoStar(97834, "pct007");
        pictoStar(99764, "pct034");
        pictoStar(100158, "pct035");
        pictoStar(101429, "pct036");
        pictoStar(103497, "pct034");
        pictoStar(104009, "pct035");
        pictoStar(105194, "pct036");
        pictoStar(107358, "pct034");
        pictoStar(107850, "pct035");
        pictoStar(109033, "pct036");
        pictoStar(111187, "pct034");
        pictoStar(111721, "pct035");
        pictoStar(112947, "pct036");
        pictoStar(115603, "pct030");
        pictoStar(116469, "pct029");
        pictoStar(123199, "pct030");
        pictoStar(127114, "pct006");
        pictoStar(128031, "pct003");
        pictoStar(130419, "pct037");
        pictoStar(130953, "pct001");
        pictoStar(132329, "pct018");
        pictoStar(132831, "pct020");
        pictoStar(133321, "pct019");
        pictoStar(133791, "pct020d");
        pictoStar(134323, "pct037");
        pictoStar(134804, "pct001");
        pictoStar(136147, "pct018");
        pictoStar(136693, "pct020");
        pictoStar(137203, "pct019");
        pictoStar(138079, "pct037");
        pictoStar(138622, "pct001");
        pictoStar(139988, "pct018");
        pictoStar(140436, "pct020");
        pictoStar(140978, "pct019");
        pictoStar(141353, "pct020d");
        pictoStar(141907, "pct024");
        pictoStar(143113, "pct012");
        pictoStar(145716, "pct021");
        pictoStar(147902, "pct023");
        pictoStar(149555, "pct021");
        pictoStar(151796, "pct023");
        pictoStar(153320, "pct021");
        pictoStar(155636, "pct023");
        pictoStar(157203, "pct021");
        pictoStar(159135, "pct009");
        pictoStar(161213, "pct015");
        pictoStar(163090, "pct008");
        pictoStar(165031, "pct014");
        pictoStar(166898, "pct007");
        pictoStar(168925, "pct015");
        pictoStar(170727, "pct008");
        pictoStar(172722, "pct014");
        pictoStar(174664, "pct007");
        pictoStar(176979, "pct028");
        pictoStar(177961, "pct026");
        pictoStar(180777, "pct027");
        pictoStar(181799, "pct025");
        pictoStar(184147, "pct024");
        pictoStar(186045, "pct033");
        pictoStar(187987, "pct032");
        pictoStar(189522, "pct033");
        pictoStar(191070, "pct022");
        pictoStar(191881, "pct037");
        pictoStar(192415, "pct001");
        pictoStar(193791, "pct018");
        pictoStar(194293, "pct020");
        pictoStar(194783, "pct019");
        pictoStar(195253, "pct020d");
        pictoStar(195785, "pct037");
        pictoStar(196266, "pct001");
        pictoStar(197609, "pct018");
        pictoStar(198155, "pct020");
        pictoStar(198665, "pct019");
        pictoStar(199541, "pct037");
        pictoStar(200084, "pct001");
        pictoStar(201450, "pct018");
        pictoStar(201898, "pct020");
        pictoStar(202440, "pct019");
        pictoStar(202815, "pct020d");
        pictoStar(203369, "pct024");
        pictoStar(204575, "pct012");
        pictoStar(207178, "pct021");
        pictoStar(209364, "pct023");
        pictoStar(211017, "pct021");
        pictoStar(213258, "pct023");
        pictoStar(214782, "pct021");
        pictoStar(217098, "pct023");
        pictoStar(218665, "pct021");
        pictoStar(222547, "pct011");
        pictoStar(224467, "pct016");
        pictoStar(226409, "pct000");
        pictoStar(228338, "pct017");
        pictoStar(230322, "pct011");
        pictoStar(232179, "pct016");
        pictoStar(234099, "pct000");
        pictoStar(236147, "pct017");
    
    };


var ani = setInterval(pictocompi,100);

















