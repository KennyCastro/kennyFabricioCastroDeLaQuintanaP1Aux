var Pregunta3 = /** @class */ (function () {
    function Pregunta3() {
        this.interface();
    }
    Pregunta3.prototype.interface = function () {
        var t = ['underscore_case',
            'first_name',
            'Some_Variable',
            'calculate_AGE',
            'delayed_departure'];
        var total = [];
        for (var i = 0; i < 5; i++) {
            total.push(t[i]);
        }
        console.log("-----------------camelCase----------------------");
        total = this.filtrado(total);
        this.conversion(total);
    };
    Pregunta3.prototype.conversion = function (tota) {
        for (var j = 0; j < tota.length; j++) {
            var result = "";
            var str = tota[j];
            var init = 0;
            var fin = 0;
            var bandera = true;
            var aux = "";
            for (var i = 0; i < str.length; i++) {
                if (str.charAt(i) == '_' || i == str.length - 1) {
                    if (i == str.length - 1)
                        i = i + 1;
                    fin = i;
                    aux = str.substr(init, fin - init);
                    if (bandera) {
                        result += (aux.charAt(0).toLowerCase() + aux.slice(1));
                    }
                    else {
                        result += (aux.charAt(0).toUpperCase() + aux.slice(1).toLowerCase());
                    }
                    bandera = false;
                    init = fin + 1;
                }
            }
            console.log(result + " \t \u2611\uFE0F");
        }
    };
    Pregunta3.prototype.filtrado = function (tot) {
        var _this = this;
        tot = tot.filter(function (item) {
            if (_this.verificacion(item)) {
                return false;
            }
            return true;
        });
        return tot;
    };
    Pregunta3.prototype.verificacion = function (cad) {
        for (var i = 0; i < cad.length; i++) {
            if (cad.charAt(0) == "_" || cad.charAt(cad.length - 1) == "_" || cad.charAt(i) == "-")
                return true;
            if (i > 1 && i == cad.length - 2) {
                if (cad.charAt(i) == "_" && cad.charAt(i + 1) == "_")
                    return true;
            }
        }
        return false;
    };
    return Pregunta3;
}());
new Pregunta3();
