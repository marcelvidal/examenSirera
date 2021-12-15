class flocs {
    constructor(img, mida, maximFlocs) {
        this.maximFlocs = maximFlocs





        this.mida = mida;


        this.img = document.createElement("img");
        this.div = document.createElement("div")
        this.img.src = img;

        this.ScreenHeight = window.innerHeight;
        this.ScreenWidth = window.innerWidth;
        this.movVertical = false;
        this.posicio = 0;


        this.img.style.width = mida + "px";
        this.img.style.height = mida + "px";
        this.img.style.position = "absolute";
        this.img.style.top = getRandom(0, this.ScreenHeight - mida) + "px";
        this.img.style.left = getRandom(0, this.ScreenWidth - mida) + "px";


        this.div.appendChild(this.img);
        document.body.appendChild(this.div);



        setInterval(this.moureNeu, 10, this);



    }



    moureNeu(t_) {

        var topImatge = t_.img.style.top;

        var posicioActual = t_.img.style.top;

        posicioActual = Number.parseInt(posicioActual);


        if (posicioActual >= 0) {
            t_.movVertical = true;
        }

        if (posicioActual + t_.mida >= t_.ScreenHeight) {
            t_.movVertical = false;
        }

        if (t_.movVertical) {
            t_.posicio++;
            var resultat = posicioActual + t_.posicio
            t_.img.style.top = resultat + "px";
        } else {
            var resultat = 0;
            t_.posicio = 0;
            t_.img.style.top = 0;

        }

    }

    



}




function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}