//FOR -> iteración

//1-1-1-1-1-1 

//sintaxis

//for(desde->donde empiezo a contar;hasta donde tengo que contar;actualización o acumulador){
    //sintaxis a ejecutar
//}

// for (let index = 0; index <= 10; index++) {
//     console.log(index)
//     //0
//     //1
//     //9
//     //10
// }


// for(i = 1; i <= 5; i++){
//     alert("el valor de i es " + i)
//     //1
//     //2
//     //3
//     //4
//     //5
// }



// for(i = 5; i >= 1; i--){
//     console.log("el valor de i es " + i)
//     //1
//     //2
//     //3
//     //4
//     //5
// }

// for(multiplicando=0;multiplicando<=10;multiplicando++){
//     for(multiplicador = 1; multiplicador<=10;multiplicador++){
//         let resultado = multiplicando * multiplicador
//         console.log(resultado)
//     }
// }

// let ingresaNumero = Number(prompt("Ingresa el num de la tabla de multiplicar que quieras"))


// for (i = 0; i <=10; i++){
//     let valor = ingresaNumero * i
//     console.log(ingresaNumero+ " * " + i + " es igual a " +  valor)
// }


//Sentencias

//break -> descanso


// for(i=1; i<=10; i++){
//     //si i llega a ser igual a 5 interrumpi el for
//     if(i == 5){
//         break -> toda logica de programación despues de break se anula
//     }
//     console.log(i)
//      //1
// //     //2
// //     //3
// //     //4

// }

//continue -> saltar la condición y terminar la ejecución

// for(i=1; i<=10; i++){
//     //si i llega a ser igual a 5 interrumpi el for
//     if(i == 5){
//         continue // toda logica de programación despues de continue se anula
//         break
//     }
//     console.log(i)
//      //1
//      //2
//     //3
//      //4
//     //6

// }

// let valor = 65;  //numero a adivinar
// let numeroTest = parseInt(prompt("Ingresa un numero de 1 a 100:"));

// if (Math.abs(valor - numeroTest) == 0){
//     alert("⭐⭐⭐⭐⭐ Acertaste");
// } else if(Math.abs(valor - numeroTest) < 5){
//     alert("🔥 Caliente!!!");
// } else if(Math.abs(valor - numeroTest) < 15){
//     alert("☀️ Tibio!!");
// } else if(Math.abs(valor - numeroTest) < 25){
//     alert("🥶 Frio!");
// } else {
//     alert("🧊 Helado");
// }


//sintaxis WHILE -> por condicion

// let num = 1

// while (num == 0) {
//     console.log("valor " + num)
// }


// for(i=1; i<=5; i++){
//      console.log("Cuenta hacia arriba con for " + i)
//  }


// let num = 1
// while(num <= 5){
//     console.log("Cuenta hacia arriba con while " + num)
//     num++
// }

// let ingresaNumero = Number(prompt("Ingresa el num de la tabla de multiplicar que quieras"))
// let mult = 1

// for (i = 0; i <=10; i++){
//     let valor = ingresaNumero * i
//     console.log(ingresaNumero+ " * " + i + " es igual a " +  valor)
// }

// while(mult <= 10){
//      let valor = ingresaNumero * mult
//      console.log(ingresaNumero + " * " + mult + " es igual a " +  valor)
//      mult++

// }

// let dato = prompt("Ingresa los productos a tu lista o ESC para terminar")

// while ((dato != "ESC"|| dato != "esc")) {
//     alert("EL prodcto ingresado es " + dato)
//     //volvemos a solicitar el dato 
//     dato = prompt("Ingresa los productos a tu lista o ESC para terminar")
// }

// do...while -> hacer mientras

// let valor = false

// while(valor == true){
//     console.log("Hola")
// }


// let num = 0

// do{
//     num = prompt("Ingresa un num")
//     console.log(num)
// //si el parse no esta el num se parse en el while
// }while(Number(num))

// confirm("Desea ser redirigido?")

// do{
// let jugador1 = prompt ("JUGADOR 1: Piedra, Papel o Tijera")
// let jugador2 = prompt ("JUGADOR 2: Piedra, Papel o Tijera")
// let piedra = "piedra"
// let papel = "papel"
// let tijera = "tijera"
// let puntaje1 = 0
// let puntaje2 = 0


// if ((jugador1 == piedra && jugador2 == piedra) || (jugador1 == papel && jugador2 == papel) || (jugador1 == tijera && jugador2 == tijera))   {

//     alert ("Han empatado!")

// } else if ((jugador1 == piedra && jugador2 == tijera) || (jugador1 == papel && jugador2 == piedra) || (jugador1 == tijera && jugador2 == piedra)) {

//     alert ("Jugador 1 ha ganado!")
//     puntaje1 ++

// } else {

//     alert ("Jugador 2 ha ganado!")
//     puntaje2 ++
    
// }

// console.log (puntaje1)
// console.log (puntaje2)
// }while(confirm("Desea seguir jugando"))

console.log (puntaje1)
console.log (puntaje2)