function zodia(dia, mes) {
    if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
        return ('Aries');
    }
    if ((dia >= 21 && mes == 4) || (dia <= 20 && mes == 5)) {
        return ('Libra');
    }
    if ((dia >= 21 && mes == 5) || (dia <= 20 && mes == 6)) {
        return ('Geminis');
    }
    if ((dia >= 21 && mes == 6) || (dia <= 20 && mes == 7)) {
        return ('Cancer');
    }
    if ((dia >= 21 && mes == 7) || (dia <= 20 && mes == 8)) {
        return ('Leo');
    }
    if ((dia >= 21 && mes == 8) || (dia <= 20 && mes == 9)) {
        return ('Virgo');
    }
    if ((dia >= 21 && mes == 9) || (dia <= 20 && mes == 10)) {
        return ('Libra');
    }
    if ((dia >= 21 && mes == 10) || (dia <= 20 && mes == 11)) {
        return ('Escorpio');
    }
    if ((dia >= 21 && mes == 12) || (dia <= 20 && mes == 1)) {
        return ('Sagitario');
    }
    if ((dia >= 21 && mes == 1) || (dia <= 20 && mes == 2)) {
        return ('Capricornio');
    }
    if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) {
        return ('Acuario');
    }
    if ((dia >= 18 && mes == 2) || (dia <= 19 && mes == 3)) {
        return ('Pisis');
    }
}
console.log(zodia(5, 4));
console.log("\n" + "CONTINENTE");
var tierra = {
    "Italia": "Europa",
    "Espana": "Europa",
    "Alemania": "Europa",
    "Austria": "Europa",
    "Francia": "Europa",
    "Rep.Dominicana": "America",
    "Colombia": "America",
    "Peru": "America",
    "Mexico": "America"
};
function dondetoy(pais) {
    if (tierra[pais] == null) {
        console.log("Pais no encontrado");
    }
    else {
        console.log(tierra[pais]);
    }
}
dondetoy("Rep.Dominicana");
console.log("ARRAYNOMBRE");
var arrayname = ["Maria", "Manuel", "Manolo"];
var check = true;
function losMs() {
    for (var i = 0; i < arrayname.length; i++) {
        if (arrayname[i][0] != 'M') {
            check = false;
        }
    }
    if (check === true) {
        console.log('Todos empiezan con M');
    }
    if (check === false) {
        console.log('Navegante, hay in impostor entre nosotros');
    }
}
losMs();
var array1 = ["casa", "ciudad", "cesta"];
var array2 = ["barco", "baca", "bicicleta", "balon", "bisiesto", "brasil"];
var array3 = ["Venezuela", "veneno", "voltaje"];
function parimpar(numero) {
    if (numero % 2 == 0) {
        console.log("el numero es par");
    }
    else {
        console.log("el numero es impar");
    }
}
function parimparsuma(array) {
    parimpar(array.length);
}
parimparsuma(array1);
