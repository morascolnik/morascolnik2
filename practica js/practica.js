 //Programa 1: Programa que tome una lista con 10 números, el programa deberá recorrer esa lista y según el numero que muestre en la consola si es par o impar//
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < ParOImpar.length; i++) {
    const numero = ParOImpar[i];
}
function ParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}


//Programa 2 Programa que tome como parámetros un numero y según el numero que se le indique muestre en la consola si es Par o Impar//
function ParOImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + " es par");
    } else {
      console.log(numero + " es impar");
    }
  }
ParOImpar = (21)
  
//Programa 3 Crea un array llamado frutas con tres nombres de frutas. Utiliza console.log() para imprimir cada fruta en el array en líneas separadas.//
const frutas = ["banana", "manzana", "frutilla",];
frutas.forEach(frutas => {
    console.log(frutas);
  });

//Programa 4 Crea una función llamada agregarFruta(fruta) que toma una fruta como parámetro y la agrega al array frutas. Llama a la función para agregar una nueva fruta al array y luego imprime el array actualizado utilizando console.log().//
const frutas2 = ["banana", "manzana", "frutilla",];
frutas2.push(mandarina);
console.log(frutas2);

//Programa 5 Utiliza un bucle for para recorrer el array frutas generado en el punto 3 y utiliza console.log() para imprimir cada fruta en líneas separadas.//
constfrutas3 = ["banana", "manzana", "frutilla"];
for (let i = 0; i < frutas3.length; i++) {
  console.log(frutas3[i]);
  document.getElementById("frutas3").innerHTML += frutas3[i] + '<br>';
}

//Programa 6 Crea una función que chequee la longitud del array creado en el punto 3 y muestre en la consola si la longitud es par o impar.//
const frutas4 = ["banana", "manzana", "frutilla"];
function verificarLongitud() {
  const longitud = frutas4.length;
  if (longitud % 2 === 0) {
    console.log("La longitud del array es par.");
  } else {
    console.log("La longitud del array es impar.");
  }
}
verificarLongitud (frutas4)

//Programa 7 Realizar un programa que muestre frases aleatorias en la pantalla//
const frases = [
    "Hola, me llamo mora scolnik",
    "Estudio comunicacion digital en la UP",
    "Esta es una actividad para la materia Contenidos y creatividad II",
  ];
const frasealeatoria = Math.floor(Math.random() * frases.length);
console.log(frases[frasealeatoria]);


//Programa 8 Realiza un programa que tome como parámetros el nombre y un numero, si el numero es mayor que 4 que muestre en la pantalla "El alumno (nombre del alumno) aprobó" y si la nota fue menor a 4 que muestre en pantalla "El alumno reprobó la cursada".//
function notasalumnos(nombre, nota) {
    if (nota >= 4) {
      console.log("El alumno " + nombre + " aprobó.");
    } else {
      console.log("El alumno " + nombre + " reprobó la cursada.");
    }
  } 

//Programa 9 Realiza un programa que guarde dos listas, una lista será de equipo azul y la otra de equipo amarillo, el programa deberá tener una función que tome como parámetros el nombre del jugador, si el jugador se encuentra en la lista de equipo azul que muestre en la pantalla "El jugador es del equipo azul" y si el alumno se encuentra en la lista del equipo amarillo muestre en pantalla "El jugador es del equipo amarillo".//
const equipoAzul = ["Messi", "Paredes", "Romero"];
const equipoAmarillo = ["Alvarez", "De Paul", "Otamendi"];

function JugadorEquipo(nombre) {
  if (equipoAzul.includes(nombre)) {
    console.log("El jugador es del equipo azul.");
  } else if (equipoAmarillo.includes(nombre)) {
    console.log("El jugador es del equipo amarillo.");
  } 
}
JugadorEquipo("Jugador3");

//Programa 10//

