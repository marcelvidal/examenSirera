// neu.js

// Paràmetres de configuració ////////////////////////////////////////////////////
	var FPS = 10 ; 			// Frames per segon 
	var MAXIMA_VELOCITAT = 2 // Maxim de pixels que avançara un floc cada frame
	var NOMBRE_FLOCS = 50	// Nombre de flocs de neu
	var MIDA_MINIMA = 5; 	// Mida mínima de les floc
	var MIDA_MAXIMA = 20;	// Mida màxima del floc
//////////////////////////////////////////////////////////////////////////////////

function iniciarNeu(){
	
	// Creem un contenidor per a les imatges i el posem al body
	var nouDiv = document.createElement("div");
	nouDiv.id = "flocs";
	document.body.appendChild(nouDiv);
	
	// Creem les imatges i les assignem al div amb una mida i posició inicials
	for (i = 0; i < NOMBRE_FLOCS; i++){
		var img = document.createElement("img");
		var mida = Math.round(Math.random() * (MIDA_MAXIMA - MIDA_MINIMA) + MIDA_MINIMA);
		img.src = "snow.png";
		img.style.position = "absolute";
		img.style.top = Math.round(Math.random() * window.innerHeight) + "px";
		img.style.left = Math.round(Math.random() * window.innerWidth) - 20+ "px";
		img.width = mida;
		img.height = mida;
		nouDiv.appendChild(img);
	}

	// Iniciem el timing d'events
	var milis = 1 / FPS * 1000; //Calculem els milisegons segons el frames x segon que es dessitgen
	window.setInterval(function(){moureFlocs()},milis);
	
}

function moureFlocs(){
	var flocs = document.getElementById("flocs");
	//per a cada imatge...
	for (i = 0; i < flocs.children.length; i++){		
		var velocitat = Math.round((flocs.children[i].width - MIDA_MINIMA)  * MAXIMA_VELOCITAT / (MIDA_MAXIMA - MIDA_MINIMA)) + 1; // Calculem el moviment vertical en funcio de la mida del floc
		posicioVertical = parseInt(flocs.children[i].style.top) + velocitat; //Obtenim la seva posició actual i li sumem 1
		if (posicioVertical > window.innerHeight -20) posicioVertical = - flocs.children[i].height; //Si la posició actual supera la mida de la finestra, aleshores la tornen a 0 menys la mida de la imatge
		flocs.children[i].style.top = posicioVertical + 'px'; //Li assignem la nova posició vertical
		movHoritzontal = Math.round(Math.random() * 4) - 2; //calculem una nova posició horitzontal
		flocs.children[i].style.left = parseInt(flocs.children[i].style.left) + movHoritzontal + 'px'; //Li assignem
		
	}
}	

