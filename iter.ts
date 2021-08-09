class Personne {
    private _nom: string;
    private _prenom: string;
    private _email: string;
    private _telephone: string;

    constructor(nom: string, prenom: string, email: string, telephone: string ) {
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._telephone = telephone;
    }

    get nom(): string {
        return this._nom;
    }
    get prenom(): string {
        return this._prenom;
    }
    get email(): string{
        return this._email;
    }
    get telephone(): string {
        return this._telephone;
    }

    public direBonjour(): void {
        console.log( `Bonjour, je m'appelle ${this._nom} ${this._prenom}, vous pouvez me joindre à ${this._email} ou m'appeler au ${this._telephone}`);
    }
}

class Iterators {
    private _items: Array<Personne>;
    constructor( ){
        this._items = [];
        this._items.push( new Personne('CAMARA', 'Mohamed', 'mohamed@gmail.com', '+224-622-895-897') );
        this._items.push( new Personne('CAMARA', 'Mawatta', 'mawatta@gmail.com', '+224-666-382-230') );
        this._items.push( new Personne('CAMARA', 'Kalil', 'kalil@gmail.com', '+224-642-995-897') );
        this._items.push( new Personne('CAMARA', 'Makoura', 'makoura@gmail.com', '+224-624-897-897') );
        this._items.push( new Personne('CAMARA', 'Fatoumata', 'fatoumata@gmail.com', '+224-623-895-897') );
        this._items.push( new Personne('CAMARA', 'Moussa', 'moussa@gmail.com', '+224-621-895-897') );
        this._items.push( new Personne('CAMARA', 'Laby Damaro', 'ldamaro98@gmail.com', '+216-56-352-275') );
    }


    [Symbol.iterator]=function*(){
        let items = this._items;
        for(let i=0; i < items.length; i++){
            yield items[i]
        }
    }
   
}

let a:Iterators = new Iterators();
for(let s of a){
    s.direBonjour()
}
