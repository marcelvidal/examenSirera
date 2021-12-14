class moviment {

	constructor(imatge, velocitat) {

		//AGARRAR VALORS DE LA PANTALLA 
		var heightScreen = window.innerHeight;
		var widthScreen = window.innerWidth;

		this.moviment = false;
		this.movHoritzontal = false;

		// CREAR TAG DIV I TAG IMG
		this.div = document.createElement("div"); // CREAR DIV
		document.body.appendChild(this.div); // AFEGIRLO COM A FILL DEL BODY
		this.img = document.createElement("img"); // CREAR IMATGE 



		// MODIFICAR IMATGE

		this.img.src = imatge;  // CREAR SRC IMATGE I AFEGIRLI DEL PARAMETRE IMATGE
		this.img.style.width = 200 + "px";
		this.img.style.height = 200 + "px";

		// POSAR POSICIONS APART PER PODERLES MANIPULAR DESPRES !!!!IMPORTA
		this.vertical = getRandom(0, (heightScreen - 200)); // RANDOM POSICIO X/Y IMATGES 
		this.horitzontal = getRandom(0, (widthScreen - 200));



		this.img.style.top = this.vertical + "px";
		this.img.style.left = this.horitzontal + "px";

		// AFEGIRLO COM A FILL DEL DIV
		this.div.appendChild(this.img);

		this.velocitat = velocitat;


		setInterval(this.moureImatge, this.velocitat, this);





	}


	// METODES DEL OBJECTE

	moureImatge(t_) {


		var topImatge = t_.img.style.top;
		var leftImatge = t_.img.style.left;
		topImatge = Number.parseInt(topImatge);
		leftImatge = Number.parseInt(leftImatge); // PARSE INT PER A QE ES PUGUI COMPARAR SINO COMPARA STRING AMB INT I NO FUNCIONA
		


		///PREEGUNTAR PERQUE EL OBJECTE NO ES MOU SI LA VARIABLE  MOVIMENT NO ESTA DECLARADA COM A OBJECTE LA CONDICIO ES AL FER -- A LA POSICIO ES TORNA TRUE PERQUE LA IMATGE TORNA A TINDRE TOP < QE ALTURA DE LA PAGINA
		// PERO SI ES UN OBJECTE NO PASSA AIXO







		if (topImatge + 200 >= window.innerHeight) {
			t_.moviment = false;
		}

		if (topImatge < 0) {
			t_.moviment = true;
		}


		if (t_.moviment) {
			t_.vertical++; // POSICIO DE LA IMATGE
			t_.img.style.top = t_.vertical + "px";

		} else {
			t_.vertical--;
			t_.img.style.top = t_.vertical + "px";
		}



		if (leftImatge + 200 >= window.innerWidth) {
			t_.movHoritzontal = false;
		}


		if (leftImatge < 0) {
			t_.movHoritzontal = true;
		}

		if (t_.movHoritzontal) {
			t_.horitzontal++; // POSICIO DE LA IMATGE
			t_.img.style.left = t_.horitzontal + "px";

		} else {
			t_.horitzontal--;
			t_.img.style.left = t_.horitzontal + "px";
		}




	}

	set setImatge(img) {
		this.img = img;
	}

	get getImatge() {
		return this.img;
	}

	set setVelocitat(velocitat) {
		this.velocitat = velocitat;
	}

	get getVelocitat() {
		return this.velocitat;
	}



}



/// FUNCIONS


function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}