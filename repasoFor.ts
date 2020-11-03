function impareshasta (param:number){
    let x=1;
    for (let i=1;i<param;i++){
        if(i%2!==0){
        console.log(i + "\n");
        }
    }
}
impareshasta(5)

function pareshasta (param:number){
    let x=1;
    for (let i=1;i<param;i++){
        if(i%2==0){
        console.log(i + "\n");
        }
    }
}
pareshasta(5)


console.log("\n" + "ARCOIRIS")

let colores:string[] = ["rojo", "gris", "morado", "marron"]

let arcoiris = {

    "amarillo": true,
    "rojo": true,
    "verde": true,
    "azul": true,
    "naranja": true,
    "morado": true
}

function imprimoColor(coloresArray:string) {


    for (let i = 0; i < coloresArray.length; i++) {
        if (arcoiris[coloresArray[i]] == true) {
            console.log(coloresArray[i] + " esta en el arcoiris")
        } else {
            console.log(coloresArray[i] + " no esta en el arcoiris")
        }

    }

}

//imprimoColor(colores);



let suma = 0;
function sumaCaracteres(k){
    for (var i = 0; i < k.length; i++) {
        suma += k[i].length
    }
    console.log(suma)

}

sumaCaracteres(["hola", "true"])