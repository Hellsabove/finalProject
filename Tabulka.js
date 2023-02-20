'use strict';

class Tabulka {

    constructor() {
        this.tabulka = document.getElementById("tabulka");  //table
        this.teloTabulky = this.tabulka.children[1];        //tbody
    }

    vytvorBunku(text) {                                         //vytvoří a vrátí novou buňku
        let novaBunka = document.createElement("td");
        novaBunka.innerHTML = text;
        return novaBunka;    
    }
        
    vytvorRadek(text) {
        let novyRadek = document.createElement("tr");       //vytvoří nový řádek
        for (let i = 0; i < 5; i++) {
            novyRadek.appendChild(this.vytvorBunku(text[i]));      //vytvoří 5 buněk a přidá je do řádku
        }
        this.teloTabulky.appendChild(novyRadek);            //přidá řádek s buňkami do tbody
    }
}