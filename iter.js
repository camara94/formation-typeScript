class Personne {
    constructor(nom, prenom, email, telephone) {
        this._nom = nom;
        this._prenom = prenom;
        this._email = email;
        this._telephone = telephone;
    }
    get nom() {
        return this._nom;
    }
    get prenom() {
        return this._prenom;
    }
    get email() {
        return this._email;
    }
    get telephone() {
        return this._telephone;
    }
    direBonjour() {
        console.log(`Bonjour, je m'appelle ${this._nom} ${this._prenom}, vous pouvez me joindre à ${this._email} ou m'appeler au ${this._telephone}`);
    }
}
class Iterators {
    constructor() {
        this[Symbol.iterator] = function* () {
            let items = this._items;
            for (let i = 0; i < items.length; i++) {
                yield items[i];
            }
        };
        this._items = [];
        this._items.push(new Personne('CAMARA', 'Mohamed', 'mohamed@gmail.com', '+224-622-895-897'));
        this._items.push(new Personne('CAMARA', 'Mawatta', 'mawatta@gmail.com', '+224-666-382-230'));
        this._items.push(new Personne('CAMARA', 'Kalil', 'kalil@gmail.com', '+224-642-995-897'));
        this._items.push(new Personne('CAMARA', 'Makoura', 'makoura@gmail.com', '+224-624-897-897'));
        this._items.push(new Personne('CAMARA', 'Fatoumata', 'fatoumata@gmail.com', '+224-623-895-897'));
        this._items.push(new Personne('CAMARA', 'Moussa', 'moussa@gmail.com', '+224-621-895-897'));
        this._items.push(new Personne('CAMARA', 'Laby Damaro', 'ldamaro98@gmail.com', '+216-56-352-275'));
    }
}
let a = new Iterators();
for (let s of a) {
    s.direBonjour();
}
