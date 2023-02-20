'use strict';

class Formular {

    constructor() {
        this.zvirata = [];              //všechna registrovaná zvířata
        this.pocetZvirat = 0;           //pořadí registrace
        const tlacitko = document.getElementById("potvrdit");   //tlačítko registrace
        const btnZaznamyZobrazit = document.getElementById("zobrazeni");    //tlačítko k zobrazení všeho, co je v localStorage
        const vsechnyZaznamyVypis = document.getElementById("vsechny-zaznamy");
        vsechnyZaznamyVypis.innerHTML = "";
        const btnZaznamySkryt = document.getElementById("skryt");

        this.tabulka = new Tabulka();      //tabulka má samostatnou třídu s vlastními metodami

        tlacitko.onclick = () => {
            this.zaregistrovat();                                           //při kliknutí tlačítka se vytvoří nové zvíře
            this.ulozZvire();
            this.vypisZvire();    
            this.pocetZvirat += 1;                                          //při dalším kliknutí se vypíše další zvíře v pořadí
        }

        btnZaznamyZobrazit.onclick = () => {
            vsechnyZaznamyVypis.style.display = "block";            //zobrazení dat
            vsechnyZaznamyVypis.innerHTML = `<code>${JSON.stringify(localStorage)}</code>`;  //výpis z localStorage jako JSON
        }

        btnZaznamySkryt.onclick = () => {
            vsechnyZaznamyVypis.style.display = "none";             //skrytí dat
        }
    }

    zaregistrovat() {
        const majitel = (document.getElementById("inputMajitel").value).trim();      //hodnoty z inputů
        const druh = document.getElementById("inputDruh").value;
        const pohlavi = document.getElementById("inputPohlavi").value;
        const jmeno = (document.getElementById("inputJmeno").value).trim();
        const cisloCipu = (document.getElementById("inputCisloCipu").value).trim();

        if(isNaN(cisloCipu)) {
            alert("Číslo čipu nesmí obsahovat písmena!");
        } else {
            if (majitel && jmeno && cisloCipu) {
                let noveZvire = new Zvire(majitel, druh, pohlavi, jmeno, cisloCipu);     //vytvoříme nové zvíře s vlastnostmi zadanými uživatelem
                this.zvirata.push(noveZvire);           //přidáme nové zvíře do pole zvířat
            }
            else {
                alert("Je potřeba vyplnit všechna pole!");
            }
        }        
    }

    ulozZvire() {
        localStorage.setItem(this.pocetZvirat, JSON.stringify(this.zvirata[this.pocetZvirat].toString())); //uložení nového záznamu do localStorage
    }

    vypisZvire() {
        this.tabulka.vytvorRadek(this.zvirata[this.pocetZvirat].toString()); //vytvoření nového řádku tabulky
    }
}