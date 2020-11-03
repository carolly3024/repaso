function impareshasta(param) {
    var x = 1;
    for (var i = 1; i < param; i++) {
        if (i % 2 !== 0) {
            console.log(i + "\n");
        }
    }
}
impareshasta(5);
function pareshasta(param) {
    var x = 1;
    for (var i = 1; i < param; i++) {
        if (i % 2 == 0) {
            console.log(i + "\n");
        }
    }
}
pareshasta(5);
console.log("\n" + "ARCOIRIS");
var colores = ["rojo", "gris", "morado", "marron"];
var arcoiris = {
    "amarillo": true,
    "rojo": true,
    "verde": true,
    "azul": true,
    "naranja": true,
    "morado": true
};
function imprimoColor(coloresArray) {
    for (var i = 0; i < coloresArray.length; i++) {
        if (arcoiris[coloresArray[i]] == true) {
            console.log(coloresArray[i] + " esta en el arcoiris");
        }
        else {
            console.log(coloresArray[i] + " no esta en el arcoiris");
        }
    }
}
//imprimoColor(colores);
var suma = 0;
function sumaCaracteres(k) {
    for (var i = 0; i < k.length; i++) {
        suma += k[i].length;
    }
    console.log(suma);
}
sumaCaracteres(["hola", "true"]);
