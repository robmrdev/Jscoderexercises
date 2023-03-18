do {
    let hufflepuff = 0;
    let ravenclaw = 0;
    let gryffindor = 0;
    let slytherin = 0;

let puntuacion = prompt("Cual es tu color favorito?\na - Amarillo\nb - Azul\nc - Rojo    \nd - Verde")
if ((puntuacion == "a") || (puntuacion == "A")){
    hufflepuff++
}else if ((puntuacion == "b") || (puntuacion == "B")){
    ravenclaw++
}else if ((puntuacion == "c") || (puntuacion == "C")){
    gryffindor++
}else if ((puntuacion == "d") || (puntuacion == "D")){
    slytherin++
}else{
    alert("Error")
}

puntuacion = prompt("Encuentras a una persona desmayada en el suelo con un golpe en la cabeza y tu...\na - Tratas de ayudarlo\nb - Decides averiguar que paso y los detalles del evento\nc - Buscas al culpable para darle su merecido\nd - Revisas sus bolsillos por si encuentras algo de valor y te lo quedas");
if ((puntuacion == "a") || (puntuacion == "A")){
    hufflepuff++
}else if ((puntuacion == "b") || (puntuacion == "B")){
    ravenclaw++
}else if ((puntuacion == "c") || (puntuacion == "C")){
    gryffindor++
}else if ((puntuacion == "d") || (puntuacion == "D")){
    slytherin++
}else{
    alert("Error")
}

puntuacion = prompt("Si tuvieses que elegir un animal, Cual seria?\na - Tejon\nb - Cuervo\nc - Leon\nd - Serpiente")
if ((puntuacion == "a") || (puntuacion == "A")){
    hufflepuff++
}else if ((puntuacion == "b") || (puntuacion == "B")){
    ravenclaw++
}else if ((puntuacion == "c") || (puntuacion == "C")){
    gryffindor++
}else if ((puntuacion == "d") || (puntuacion == "D")){
    slytherin++
}else{
    alert("Error")
}

puntuacion = prompt("Cual es tu lugar favorito del castillo?\na - Los Invernaderos\nb - La biblioteca\nc - El campo de Quidditch\nd - Las Mazmorras")
if ((puntuacion == "a") || (puntuacion == "A")){
    hufflepuff++
}else if ((puntuacion == "b") || (puntuacion == "B")){
    ravenclaw++
}else if ((puntuacion == "c") || (puntuacion == "C")){
    gryffindor++
}else if ((puntuacion == "d") || (puntuacion == "D")){
    slytherin++
}else{
    alert("Error")
}

if ((hufflepuff>ravenclaw)&&(hufflepuff>gryffindor)&&(hufflepuff>slytherin)) {
    alert("Eres de Hufflepuff")    
} else if ((ravenclaw>hufflepuff)&&(ravenclaw>gryffindor)&&(ravenclaw>slytherin)) {
    alert("Eres de Ravenclaw")
} else if ((gryffindor>hufflepuff)&&(gryffindor>ravenclaw)&&(gryffindor>slytherin)) {
    alert("Eres de Gryffindor")
} else if ((slytherin>hufflepuff)&&(slytherin>ravenclaw)&&(slytherin>gryffindor)) {
    alert("Eres de Ravenclaw")
}else {
    alert ("intentalo de nuevo")
}

} while (condition);