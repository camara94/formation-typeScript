var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function f(param) {
    return function (target, prop) {
        console.log('Déco : ' + param);
    };
}
class Etudiant {
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
    direBonjour(param) {
        console.log(`Bonjour, je m'appelle ${this._nom} ${this._prenom}, vous pouvez me joindre à ${this._email} ou m'appeler au ${this._telephone}`);
    }
}
__decorate([
    f('LABY DAMARO')
], Etudiant.prototype, "direBonjour", null);
