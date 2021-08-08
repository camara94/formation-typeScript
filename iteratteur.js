class UneCollection {
    constructor() {
        this.values = [];
        this.values.push('Valeur 1');
        this.values.push('Valeur 2');
        this.values.push('Valeur 3');
        this.values.push('Valeur 4');
        this.values.push('Valeur 5');
    }
    [Symbol.iterator]() {
        let values = this.values;
        let pos = 0;
        return {
            next() {
                let ret = { value: undefined, done: true };
                if (pos < values.length) {
                    ret.value = values[pos];
                    ret.done = false;
                    pos++;
                }
                return ret;
            }
        };
    }
}
var o = new UneCollection();
for (let i of o) {
    console.log(i);
}
