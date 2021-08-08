class UnGenerateur {
    constructor() {
        this[Symbol.iterator] = function* () {
            let values = this.values;
            let pos = 0;
            for (; pos < values.length; pos++) {
                yield values[pos];
            }
        };
        this.values = [];
        this.values.push('Valeur 1');
        this.values.push('Valeur 2');
        this.values.push('Valeur 3');
        this.values.push('Valeur 4');
        this.values.push('Valeur 5');
        this.values.push('Valeur 6');
    }
}
var g = new UnGenerateur();
for (let j of g) {
    console.log(j);
}
