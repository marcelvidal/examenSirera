var heightScreen = window.innerHeight;
var witdthScreen = window.innerWidth;
var posicio = 0;
var lateral = 0;
var moviment = false;
var movimentLateral =false;

function iniciarNeu() {


    var maxCopos = 60;


    var div = document.createElement("div");
    div.id = "flocs";


    for (let i = 0; i < maxCopos; i++) {


        document.body.appendChild(div);

        var img = document.createElement("img");

        img.src = "images/snow.png";

        img.style.height = 30 + "px";
        img.style.width = 30 + "px";
        img.style.position = "absolute";
        img.style.top = RandomentreDos(0, heightScreen) + "px";
        img.style.left = RandomentreDos(0, witdthScreen) + "px";
        

        div.appendChild(img);


    }
    setInterval("moureNeu()", 100);



}



function moureNeu() {
    var flocs = document.getElementById("flocs");

    for (let i = 0; i < flocs.children.length; i++) {

        var posicioActual = flocs.children[i].style.top;
        var posiciolateral = flocs.children[i].style.left;
        posicioActual = parseInt(posicioActual);
        posiciolateral = parseInt(posiciolateral);

        if (posicioActual >= 0) {
            moviment = true;

            flocs.children[i].style.left = posiciolateral + lateral +"px";
        }
        if (posicioActual >= heightScreen) {
            moviment = false;
        }

        if (moviment) {
            posicio++;
            var resultat = posicioActual + posicio;
            flocs.children[i].style.top = resultat +"px";



        }else{
            var resultat = 0; // abans(0)  ara(100) +posicio(50) - 100-50;  // POSICIO ACTUAL RESTA LA POSICIO ON ESTA MES LES POSICIONS SUMADES PER TORNAR AL
            posicioActual =0;
            posicio =0;
            flocs.children[i].style.top = resultat +"px";
        }



        if (posiciolateral >= 0) {
            movimentLateral = true;

         
        }
        if(posiciolateral >= witdthScreen){
            movimentLateral = false;
        }


        if(!movimentLateral){
           var resultat = 0;
           flocs.children[i].style.left = resultat +"px"
           posiciolateral = 0;
           lateral =0;

        
        }else{
            var resultat =  posiciolateral + posicio;
            flocs.children[i].style.left = resultat +"px";
        }



    }


}



function RandomentreDos(min, max) {
    var random = Math.floor((Math.random() * (max - min)) + min);
    return random;
}

