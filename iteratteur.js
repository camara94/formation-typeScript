"use strict";
var UneCollection = /** @class */ (function () {
    function UneCollection() {
        this.values = [];
        this.values.push('Valeur 1');
        this.values.push('Valeur 2');
        this.values.push('Valeur 3');
        this.values.push('Valeur 4');
        this.values.push('Valeur 5');
    }
    UneCollection.prototype[Symbol.iterator] = function () {
        var values = this.values;
        var pos = 0;
        return {
            next: function () {
                var ret = { value: undefined, done: true };
                if (pos < values.length) {
                    ret.value = values[pos];
                    ret.done = false;
                    pos++;
                }
                return ret;
            }
        };
    };
    return UneCollection;
}());
var o = new UneCollection();
for (var _i = 0, o_1 = o; _i < o_1.length; _i++) {
    var i = o_1[_i];
    console.log(i);
}
