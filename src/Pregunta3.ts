
class Pregunta3 {

    constructor() {

        this.interface();

    }


    interface() {
        var t: String[] = ['underscore_case',
            'first_name',
            'Some_Variable',
            'calculate_AGE',
            'delayed_departure'];
        var total: String[] = [];

        for (var i = 0; i < 5; i++) {
            total.push(t[i]);
        }
        console.log("-----------------camelCase----------------------")
        total = this.filtrado(total);
        this.conversion(total);

    }


    conversion(tota: Array<String>) {
        for (var j = 0; j < tota.length; j++) {
            let result = "";
            let str = tota[j];
            let init: number = 0
            let fin: number = 0;
            let bandera: boolean = true;
            let aux: String = "";
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

            console.log(`${result} \t ☑️`);



        }

    }
    filtrado(tot: Array<String>): String[] {
        tot = tot.filter((item: String) => {
            if (this.verificacion(item)) {
                return false;
            }
            return true;

        });
        return tot;

    }

    verificacion(cad: String) {
        for (var i = 0; i < cad.length; i++) {
            if (cad.charAt(0) == "_" || cad.charAt(cad.length - 1) == "_" || cad.charAt(i) == "-")
                return true;
            if (i > 1 && i == cad.length - 2) {
                if (cad.charAt(i) == "_" && cad.charAt(i + 1) == "_")
                    return true;
            }
        }
        return false;
    }

}

new Pregunta3();