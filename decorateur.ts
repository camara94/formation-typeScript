function f(param: any) {
   return function(target: any, prop: any) {
    console.log('Déco : ' + param);
   }
}
class Etudiant {
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
    @f('LABY DAMARO')
    public direBonjour(param?: string): void {
        console.log( `Bonjour, je m'appelle ${this._nom} ${this._prenom}, vous pouvez me joindre à ${this._email} ou m'appeler au ${this._telephone}`);
    }
}