
//numeros de coach (1 / 2 / 3-4)
    var numcouch = 1;

    //pictogramas
    var carpeta = "https://archive.org/download/JD_Ultimate/Ultimate/Songs/disturbia/";

    //css color
    var ccsColor = "CSS/color.css";

    //javascript normal
    var jsPrincipal = "JS/script.js";

    //url del video
    var videoUrl = "https://ia801401.us.archive.org/32/items/jd4_20220315/b9atphm6ntxntqxwajhj.mp4";

    //url del video
    // var videoUrl = "https://www.googleapis.com/drive/v3/files/1Z6WibEgZkmmG_AkfsPyF-BO41iVSJFT4?alt=media&key=AIzaSyAx9lrSylXo3p2sgRDLz2WSGXnvePJKnw0";

    //url del video (preview)
    var videoUrlprev = "prev.mp4";

    //titulo del tema
    var namesong = "Disturbia";

    //artista
    var artistname = "Rihanna";

    //background
    var fondoUrl = "https://archive.org/download/JD_Ultimate/Ultimate/Songs/disturbia/img/Background.webp";

    //coach
    var imgcouchUrl = "https://archive.org/download/JD_Ultimate/Ultimate/Songs/disturbia/img/Coach.webp";

    









//_______________________________________________________________________________________________________________________________________________//












function numeroch(){
    var varnumch = "coach" + numcouch
    document.getElementById('song').classList.add(varnumch);
}

function namepg(){
document.writeln("<title>" + namesong + "</title>")
}

function estilo()
{
document.writeln("    <link rel=\"stylesheet\" href=\"https://angello934.github.io/jd/CSS/" + numcouch + "couch/style.css\"  type=\"text/css\" >");
document.writeln("    <link rel=\"stylesheet\"href=\"https://angello934.github.io/jd/CSS/" + numcouch + "couch/animation.css\"  type=\"text/css\" >");
}

function colorurl(){
document.writeln("<link rel=\"stylesheet\" href=\"" + ccsColor + "\" type=\"text/css\">");
}

function Vidurl()
{
document.writeln("<video class=\"playback\" id=\"playback\" src=\"" + videoUrl + "\" preload=\"auto\"></video>");
}

function Vidurl2()
{
document.writeln("<video class=\"playback-prev\" id=\"playback-prev\" src=\"" + videoUrlprev + "\" preload=\"auto\" autoplay loop></video>");
}

function Pitogramasurl(){
    document.writeln("<div id=\"pct000\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/000.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct001\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/001.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct002\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/002.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct003\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/003.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct004\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/004.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct005\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/005.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct006\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/006.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct007\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/007.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct008\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/008.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct009\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/009.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct010\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/010.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct011\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/011.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct012\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/012.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct013\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/013.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct014\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/014.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct015\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/015.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct016\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/016.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct017\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/017.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct018\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/018.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct019\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/019.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct020\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/020.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct021\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/021.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct022\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/022.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct023\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/023.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct024\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/024.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct025\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/025.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct026\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/026.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct027\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/027.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct028\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/028.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct029\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/029.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct030\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/030.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct031\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/031.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct032\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/032.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct033\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/033.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct034\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/034.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct035\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/035.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct036\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/036.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct037\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/037.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct038\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/038.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct039\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/039.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct040\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/040.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct041\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/041.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct042\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/042.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct043\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/043.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct044\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/044.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct045\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/045.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct046\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/046.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct047\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/047.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct048\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/048.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct049\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/049.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct050\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/050.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct051\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/051.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct052\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/052.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct053\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/053.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct054\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/054.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct055\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/055.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct056\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/056.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct057\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/057.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct058\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/058.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct059\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/059.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct060\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/060.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct061\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/061.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct062\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/062.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct063\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/063.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct064\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/064.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct065\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/065.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct066\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/066.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct067\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/067.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct068\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/068.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct069\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/069.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct070\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/070.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct071\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/071.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct072\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/072.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct073\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/073.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct074\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/074.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct075\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/075.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct076\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/076.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct077\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/077.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct078\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/078.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct079\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/079.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct080\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/080.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct081\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/081.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct082\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/082.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct083\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/083.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct084\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/084.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct085\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/085.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct086\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/086.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct087\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/087.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct088\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/088.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct089\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/089.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct090\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/090.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct091\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/091.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct092\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/092.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct093\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/093.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct094\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/094.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct095\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/095.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct096\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/096.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct097\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/097.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct098\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/098.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct099\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/099.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct100\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/100.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct101\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/101.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct102\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/102.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct103\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/103.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct104\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/104.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct105\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/105.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct106\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/106.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct107\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/107.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct108\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/108.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct109\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/109.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct110\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/110.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct111\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/111.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct112\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/112.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct113\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/113.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct114\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/114.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct115\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/115.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct116\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/116.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct117\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/117.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct118\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/118.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct119\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/119.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct120\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/120.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct121\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/121.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct122\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/122.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct123\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/123.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct124\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/124.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct125\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/125.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct126\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/126.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct127\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/127.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct128\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/128.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct129\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/129.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct130\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/130.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct131\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/131.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct132\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/132.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct133\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/133.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct134\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/134.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct135\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/135.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct136\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/136.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct137\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/137.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct138\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/138.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct139\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/139.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct140\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/140.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct141\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/141.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct142\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/142.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct143\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/143.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct144\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/144.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct145\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/145.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct146\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/146.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct147\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/147.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct148\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/148.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct149\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/149.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct150\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/150.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct151\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/151.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct152\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/152.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct153\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/153.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct154\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/154.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct155\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/155.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct156\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/156.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct157\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/157.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct158\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/158.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct159\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/159.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct160\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/160.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct161\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/161.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct162\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/162.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct163\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/163.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct164\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/164.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct165\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/165.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct166\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/166.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct167\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/167.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct168\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/168.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct169\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/169.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct170\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/170.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct171\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/171.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct172\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/172.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct173\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/173.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct174\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/174.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct175\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/175.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct176\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/176.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct177\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/177.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct178\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/178.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct179\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/179.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct180\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/180.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct181\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/181.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct182\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/182.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct183\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/183.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct184\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/184.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct185\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/185.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct186\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/186.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct187\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/187.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct188\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/188.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct189\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/189.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct190\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/190.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct191\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/191.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct192\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/192.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct193\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/193.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct194\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/194.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct195\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/195.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct196\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/196.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct197\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/197.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct198\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/198.png\" preload=\"auto\"></div>");
    document.writeln("<div id=\"pct199\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/199.png\" preload=\"auto\"></div>");

document.writeln("<div id=\"pct000d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/000.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct001d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/001.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct002d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/002.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct003d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/003.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct004d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/004.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct005d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/005.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct006d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/006.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct007d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/007.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct008d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/008.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct009d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/009.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct010d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/010.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct011d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/011.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct012d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/012.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct013d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/013.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct014d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/014.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct015d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/015.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct016d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/016.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct017d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/017.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct018d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/018.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct019d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/019.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct020d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/020.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct021d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/021.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct022d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/022.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct023d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/023.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct024d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/024.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct025d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/025.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct026d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/026.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct027d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/027.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct028d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/028.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct029d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/029.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct030d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/030.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct031d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/031.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct032d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/032.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct033d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/033.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct034d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/034.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct035d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/035.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct036d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/036.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct037d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/037.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct038d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/038.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct039d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/039.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct040d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/040.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct041d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/041.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct042d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/042.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct043d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/043.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct044d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/044.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct045d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/045.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct046d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/046.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct047d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/047.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct048d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/048.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct049d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/049.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct050d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/050.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct051d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/051.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct052d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/052.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct053d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/053.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct054d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/054.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct055d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/055.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct056d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/056.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct057d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/057.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct058d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/058.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct059d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/059.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct060d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/060.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct061d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/061.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct062d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/062.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct063d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/063.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct064d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/064.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct065d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/065.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct066d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/066.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct067d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/067.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct068d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/068.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct069d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/069.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct070d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/070.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct071d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/071.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct072d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/072.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct073d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/073.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct074d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/074.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct075d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/075.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct076d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/076.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct077d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/077.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct078d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/078.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct079d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/079.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct080d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/080.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct081d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/081.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct082d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/082.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct083d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/083.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct084d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/084.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct085d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/085.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct086d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/086.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct087d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/087.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct088d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/088.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct089d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/089.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct090d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/090.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct091d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/091.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct092d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/092.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct093d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/093.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct094d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/094.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct095d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/095.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct096d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/096.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct097d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/097.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct098d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/098.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct099d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/099.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct100d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/100.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct101d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/101.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct102d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/102.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct103d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/103.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct104d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/104.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct105d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/105.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct106d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/106.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct107d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/107.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct108d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/108.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct109d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/109.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct110d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/110.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct111d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/111.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct112d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/112.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct113d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/113.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct114d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/114.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct115d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/115.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct116d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/116.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct117d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/117.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct118d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/118.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct119d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/119.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct120d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/120.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct121d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/121.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct122d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/122.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct123d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/123.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct124d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/124.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct125d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/125.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct126d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/126.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct127d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/127.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct128d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/128.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct129d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/129.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct130d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/130.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct131d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/131.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct132d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/132.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct133d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/133.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct134d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/134.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct135d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/135.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct136d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/136.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct137d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/137.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct138d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/138.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct139d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/139.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct140d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/140.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct141d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/141.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct142d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/142.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct143d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/143.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct144d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/144.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct145d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/145.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct146d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/146.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct147d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/147.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct148d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/148.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct149d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/149.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct150d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/150.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct151d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/151.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct152d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/152.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct153d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/153.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct154d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/154.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct155d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/155.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct156d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/156.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct157d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/157.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct158d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/158.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct159d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/159.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct160d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/160.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct161d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/161.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct162d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/162.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct163d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/163.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct164d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/164.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct165d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/165.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct166d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/166.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct167d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/167.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct168d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/168.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct169d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/169.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct170d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/170.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct171d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/171.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct172d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/172.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct173d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/173.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct174d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/174.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct175d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/175.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct176d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/176.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct177d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/177.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct178d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/178.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct179d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/179.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct180d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/180.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct181d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/181.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct182d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/182.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct183d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/183.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct184d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/184.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct185d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/185.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct186d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/186.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct187d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/187.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct188d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/188.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct189d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/189.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct190d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/190.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct191d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/191.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct192d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/192.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct193d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/193.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct194d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/194.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct195d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/195.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct196d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/196.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct197d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/197.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct198d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/198.png\" preload=\"auto\"></div>");
document.writeln("<div id=\"pct199d\" class=\"imgpictocl\"><img src=\"" + carpeta + "picto.zip/199.png\" preload=\"auto\"></div>");
}
// document.writeln("" + carpeta + "");
// function bgsoundUrl(){
//     document.writeln("<source src=\"" + carpeta + "soundtrack.ogg\">");
// };

function backgroudurl(){
    document.writeln("<div id=\"fondoprv\" class=\"coach\" style=\"background-image: url(" + fondoUrl + ")\">");
};

function coachimgurl(){
    document.writeln("<img id=\"coachimg\" src=\"" + imgcouchUrl + "\" preload=\"auto\">");
};

function ScriptUrl(){
    document.writeln("<script src=\"" + jsPrincipal + "\"></script>");
}

function songartist(){
    document.writeln("<p>" + namesong + " - " + artistname + "</p>")
}