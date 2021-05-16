//----------CLACULADORA-------------------
let factura: number = 275;


//---------Tarea 1 ------------------
console.log("-----------Tarea 1-----------------");
var tip: number = factura * (factura >= 50 && factura <= 300 ? 0.15 : 0.2);
console.log(tip);



//---------Tarea 2 ------------------
console.log("----------tarea 2------------")
console.log(`La factura fue ${factura}, la propina fue ${tip} y el valor total ${factura + tip} `);


//---------Tarea 3 ------------------
console.log("----------tarea 3------------")

const calcTip = function (factura: number) {
    return factura * (factura >= 50 && factura <= 300 ? 0.15 : 0.2);
}

tip = calcTip(100);
console.log(tip);
//---------Tarea 4 ------------------

const facturas: number[] = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


//---------Tarea 5 ------------------
const propinas: number[] = [];
const totales: number[] = [];


//---------Tarea 6 ------------------
console.log("----------tarea 6------------")

for (var i = 0; i < facturas.length; i++) {
    propinas[i] = calcTip(facturas[i]);
    totales[i] = facturas[i] + propinas[i];
    console.log(`La factura fue ${facturas[i]}, la propina fue ${propinas[i]} y el valor total ${facturas[i] + propinas[i]} `)
}

