/*

class Gravadora {
    constructor() {
        this._frases = [];
    }

    enregistrar(novaFrase) {
        this._frases.push(novaFrase);
    }

    reproduir(paraula) {
        var text = "";
        this._frases.forEach(function (item, index, array) {
            if (item.indexOf(paraula) != -1)
                text += item + ". "
        });
        return text;
    };
    get nombreMissatges() {
        return this._frases.length
    }

}

Crea un objecte amb javascript anomenat "Gravadora" que enregistri tot el que escolta, i ho reprodueixi quan li consultis. Els mètodes que tindrà son:

Gravadora()    //constructor
enregistrar(frase):   //Mètode per enregistrar tot el que es diu.
reproduir(paraula):   //Mètode que totes les frases en les quals hi ha aparegut la paraula.
nombreMissatges:   //Propietat amb la quantitat de missatges desats.

El codi per a l'ús de l'objecte sera:


La resposta ha de ser:


ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
officia: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Nombre de missatges: 4*/




class Gravadora {


    constructor() {

        this._guardarFrases = [];

    }





    enregistrar(frase) {

        this._guardarFrases.push(frase);

    }


    get nombreMissatges() {

        return this._guardarFrases.length

    }

    reproduir(paraula) {


        var frase = "";

        for (var i = 0; i < this._guardarFrases.length; i++) {
            if (this._guardarFrases[i].includes(paraula)) {
                frase = this._guardarFrases[i];
            }
        }
        return frase;
    }



}






var laMevaGravadora = new Gravadora();


laMevaGravadora.enregistrar("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
laMevaGravadora.enregistrar("Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
laMevaGravadora.enregistrar("Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
laMevaGravadora.enregistrar("Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
console.log("ipsum: " + laMevaGravadora.reproduir("ipsum"));
console.log("officia: " + laMevaGravadora.reproduir("officia"));
laMevaGravadora.nombreMissatges = 10; //No té cap efecte perque no existeix el setter.
console.log("Nombre de missatges: " + laMevaGravadora.nombreMissatges);




