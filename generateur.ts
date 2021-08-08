class UnGenerateur {
    private values: Array<string>;

    constructor() {
        this.values = [];
        this.values.push( 'Valeur 1' );
        this.values.push( 'Valeur 2' );
        this.values.push( 'Valeur 3' );
        this.values.push( 'Valeur 4' );
        this.values.push( 'Valeur 5' );
        this.values.push( 'Valeur 6' );
    }
    [Symbol.iterator]=function*(){
        let values: Array<string> = this.values;
        let pos: number = 0;
       for( ;pos < values.length; pos++) {
            yield values[pos]
       }
    }

}

var g: UnGenerateur = new UnGenerateur();

for( let j of g ) {
    console.log( j );
}