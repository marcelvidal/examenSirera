class moviment {

	constructor(imatge, velocitat) {

		//AGARRAR VALORS DE LA PANTALLA 
		var heightScreen = window.innerHeight;
		var widthScreen = window.innerWidth;




		// CREAR TAG DIV I TAG IMG
		this.div = document.createElement("div"); // CREAR DIV
		document.body.appendChild(this.div); // AFEGIRLO COM A FILL DEL BODY
		this.img = document.createElement("img"); // CREAR IMATGE 
		


		// MODIFICAR IMATGE

		this.img.src = imatge;  // CREAR SRC IMATGE I AFEGIRLI DEL PARAMETRE IMATGE
		this.img.style.width = 200+"px";
		this.img.style.height = 200+"px";


		this.img.style.top = getRandom(0,widthScreen)+"px"; // FALTA DIRLI LAMPLADA DE LA PANTALLA
		this.img.style.left = getRandom(0,heightScreen)+"px"; // FALTA DIRLI
		this.div.appendChild(this.img); // AFEGIRLO COM A FILL DEL DIV

		this.velocitat = velocitat;  


	}
}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}