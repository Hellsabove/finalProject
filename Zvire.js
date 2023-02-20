'use strict';

const privates = new WeakMap();     //místo pro privátní vlastnosti zvířete

class Zvire {
    constructor(majitel, druh, pohlavi, jmeno, cisloCipu) { //konstruktor třídy + privátní vlastnosti
        privates.set(this, {
            _majitel: majitel,
            _druh: druh,
            _pohlavi: pohlavi,
            _jmeno: jmeno,
            _cisloCipu: cisloCipu
        });
    }

    toString() {        //vrací výpis všech privátních vlastností zvířete
        let vlastnosti = [privates.get(this)._jmeno, privates.get(this)._druh, privates.get(this)._pohlavi, privates.get(this)._cisloCipu, privates.get(this)._majitel];
        return vlastnosti;


        //return `${privates.get(this)._jmeno}, ${privates.get(this)._druh}, ${privates.get(this)._pohlavi}, ${privates.get(this)._cisloCipu}, ${privates.get(this)._majitel}<br>`;
    }


}