console.log("\n" + "ZODIACO")

function zodiaco(dia, mes) {

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
console.log(zodiaco(21, 2));

///NUMEROS IMPARES
console.log("\n" + "IMPARES")


let array = [3, 4, 6, 2, 10, 22, 34, 7];

let arrayImpares = array.filter(function (numero) {
    return numero % 2 !== 0
})

console.log(arrayImpares)

///ARRAY
console.log("\n" + "ARRAY")


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ultimo = arr.length - 1;

function InvertirArreglo(ultimo) {

    for (let i = ultimo; i >= 0; i--) {
        console.log(arr[i])

    }
}
InvertirArreglo(arr.length);


///PAISES
console.log("\n" + "CONTINENTE")

let tierra = {

    "Italia": "Europa",
    "Espana": "Europa",
    "Alemania": "Europa",
    "Austria": "Europa",
    "Francia": "Europa",
    "Rep.Dominicana": "America",
    "Colombia": "America",
    "Peru": "America",
    "Mexico": "America"
}

function dondetoy(pais) {
    if (tierra[pais] == null) {
        console.log("Pais no encontrado")
    } else {
        console.log(tierra[pais])
    }

}

dondetoy("Rep.Dominicana");


///arcoiris
console.log("\n" + "ARCOIRIS")

let colores = ["rojo", "gris", "morado", "marron"]

let arcoiris = {

    "amarillo": true,
    "rojo": true,
    "verde": true,
    "azul": true,
    "naranja": true,
    "morado": true
}

function imprimoColor(coloresArray) {

    /*     coloresArray.forEach(color => {
    
        if(arcoiris[color] == true ){
            console.log(color + " esta en el arcoiris")
        } else
        {
            console.log(color + " no esta en el arcoiris")
        }
        }); */

    for (let i = 0; i < coloresArray.length; i++) {
        if (arcoiris[coloresArray[i]] == true) {
            console.log(coloresArray[i] + " esta en el arcoiris")
        } else {
            console.log(coloresArray[i] + " no esta en el arcoiris")
        }

    }

}

imprimoColor(colores)

///NUMEROS PARES
/* console.log("\n" + "PARES")

function numeroPar(numero)
{
    for()
    {

    }
} */

console.log("ARRAYNOMBRE");

let arrayname = [ "Maria", "Manuel", "Manolo"];

let check = true

function losMs(){
    for (var i = 0; i < arrayname.length; i++) {
            if(arrayname[i][0] != 'M'){
                check = false
        }
    }
    if(check === true){console.log('Todos empiezan con M')}
        if(check === false){console.log('Navegante, hay in impostor entre nosotros')}
}
losMs()

////ARRAY STRIG
console.log("suma");

let suma = 0;
function sumaCaracteres(k){
    for (var i = 0; i < k.length; i++) {
        suma += k[i].length
    }
    console.log(suma)

}

sumaCaracteres(["hola", "true"])


///Mensaje
function numeroParimpar(numero){
    if (numero%2==0){
        console.log("el numero es par");
    }
    else{
        console.log("el numero es impar")
    }
}

numeroParimpar(4)


let array1 = ["casa", "ciudad", "cesta"];
let array2 = ["barco", "baca", "bicicleta", "balon","bisiesto", "brasil"];
let array3 = ["Venezuela", "veneno", "voltaje"];

function paroimpar2(numero){
    if (numero%2==0){
        console.log("el numero es par");
    }
    else{
        console.log("el numero es impar")
    }
}

function numeroPar2(array){

    paroimpar(sumapalabra(array))
}

console.log(sumapalabra(array1));



 





