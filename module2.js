System.register(["./module1"], function (exports_1, context_1) {
    "use strict";
    var module1_1, pers1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (module1_1_1) {
                module1_1 = module1_1_1;
            }
        ],
        execute: function () {
            pers1 = new module1_1.Personne('CAMARA', 'Laby Damaro', 'ldamaro98@gmail.com', '+216-56-352-275');
            pers1.direBonjour();
        }
    };
});
