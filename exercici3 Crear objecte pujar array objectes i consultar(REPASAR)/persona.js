//objecte persona
class Persona {

	constructor(nom, cognoms, DNI, dataNaixement) { //exemple ("Pep", "Serra", 43765875, "1997-10-11")
		this._nom = nom;
		this._cognoms = cognoms;
		this._DNI = DNI;
		this._dataNaixement = new Date(dataNaixement);
	}

	get edat() {
		var temps = Date.now() - this._dataNaixement.getTime();
		var edat = new Date(temps);
		return Math.abs(edat.getUTCFullYear() - 1970);
	}

	get DNI() {
		return (this._DNI);
	}

	get NIF() {
		var cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
		var posicio = this._DNI % 23;
		return (this._DNI + cadena.substring(posicio, posicio + 1));
	}

	get nomComplet() {
		return (this._nom + " " + this._cognoms);
	}

	potVotar() {
		if (this.edat >= 18) return true;
		else return false;
	}


}



var persones = [];

function desar() {

	var nom = document.getElementById("nom").value;


	var cognom = document.getElementById("cognom").value;

	var dni = document.getElementById("dni").value;

	var date = document.getElementById("data").value;

	var persona = new Persona(nom, cognom, dni, date);

	persones.push(persona);



}


function consultar() {

	var ul = document.getElementById("llista");




	for (var i = 0; i < persones.length; i++) {
		if (persones[i].potVotar()) {

			var li = document.createElement("li");
			var li2 = document.createElement("li");
			var li3 = document.createElement("li");
			var li4 = document.createElement("li");


			var nom = document.createTextNode(persones[i]._nom);
			var cognom = document.createTextNode(persones[i]._cognoms);
			var dni = document.createTextNode(persones[i]._DNI);
			var dataNaix = document.createTextNode(persones[i]._dataNaixement);

			li.appendChild(nom);
			li2.appendChild(cognom);
			li3.appendChild(dni);
			li4.appendChild(dataNaix);
			
			ul.appendChild(li);
			ul.appendChild(li2);
			ul.appendChild(li3);
			ul.appendChild(li4);

			
		}

	
	}

	var llista = document.getElementById("llista");

	for (let i = 0; i < llista.children.length; i++) {
		console.log(llista.children[i]);
	}
	
}

