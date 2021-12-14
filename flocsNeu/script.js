// CONSTRUIR FLOCS

//FUNCIO TAMANY FLOCS MAXIM I MINIM
function RandomentreDos(min, max) {
    var random = Math.floor((Math.random() * (max - min)) + min);
    return random;
}


// FLOCS
var maximFlocs = 60;
var fotogrames = 10;
var segons = 1 / fotogrames * 1000;




function iniciarNeu() {
    var posicio = 0;

    //CREAR DIV 
    var div = document.createElement("div");
    // AFEGIR ID AL DIV
    div.id = "flocs";
    // AFEGIRLO AL BODY
    document.body.appendChild(div);

    //CREAR IMATGES 
    // SEMPRE ES MILLOR TREBALLAR SOBRE UNA VARIABLE SELECCINADA PER ID I TREBALLAR AMB ELS FILLS 
    //var div = document.getElementById("flocs");


    for (let i = 0; i < maximFlocs; i++) {

        //GENERAR TAMANY ALEATORI DELS FLOCS
        var amplada = RandomentreDos(15, 30);
        var height = amplada;



        //POSICIONS ALEATORIES ENTRE 0 I EL MAXIM DE LA PANTALLA
        var heightScreen = window.innerHeight;
        var widthScreen = window.innerWidth;

        //var topIamagePosition = RandomentreDos(0, heightScreen);
        var leftImagePosition = RandomentreDos(0, widthScreen);
        var topImagePosition = RandomentreDos(0, heightScreen);

        //CREAR LA IMATGE

        var img = document.createElement("img");
        img.src = "images/snow.png";

        img.style.width = amplada + "px";
        img.style.height = height + "px";
        img.style.top = topImagePosition + "px";
        img.style.left = leftImagePosition + "px";

        //AFEGIR IMATGE
        div.appendChild(img);





    } setInterval(function movimentNeu() {

        var flocs = document.getElementById("flocs");
        var moviment = false;
        var height = window.innerHeight;
  

        for (let i = 0; i < flocs.children.length; i++) {
            var top = flocs.children[i].style.top;
            top = Number.parseInt(top);
            console.log(top);


            //Tots els fills del div amb id flocs que son imatges
            if (top <= height) {
                moviment = true;
            }

            if (moviment == true) {
                topImagePosition++;
                flocs.children[i].style.top = topImagePosition+ "px";

            }


            if (top >= height) {
        
            }

            // SI EL MOVIMENT ES FALSE ES QE A DE TORNAR A COMENÇAR TOT






        }



    }, 100);
}



