System.register([], function (exports_1, context_1) {
    "use strict";
    var Personne;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Personne = /** @class */ (function () {
                function Personne(nom, prenom, email, telephone) {
                    this._nom = nom;
                    this._prenom = prenom;
                    this._email = email;
                    this._telephone = telephone;
                }
                Object.defineProperty(Personne.prototype, "nom", {
                    get: function () {
                        return this._nom;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Personne.prototype, "prenom", {
                    get: function () {
                        return this._prenom;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Personne.prototype, "email", {
                    get: function () {
                        return this._email;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Personne.prototype, "telephone", {
                    get: function () {
                        return this._telephone;
                    },
                    enumerable: false,
                    configurable: true
                });
                Personne.prototype.direBonjour = function () {
                    console.log("Bonjour, je m'appelle " + this._nom + " " + this._prenom + ", vous pouvez me joindre \u00E0 " + this._email + " ou m'appeler au " + this._telephone);
                };
                return Personne;
            }());
            exports_1("Personne", Personne);
        }
    };
});
