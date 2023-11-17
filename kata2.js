// Cálculo de edad con distintos años
let nacimientos = [1985, 2000, 1992, 1978, 1995];

function calcularEdad(nacimientos) {
  const fecha = new Date();
  const agnoActual = fecha.getFullYear();
  for (var i = 0; i < nacimientos.length; i++) {
    let edad = agnoActual - nacimientos[i];
    console.log(
      "Año de nacimiento: " + nacimientos[i] + " y su edad es: " + edad
    );
  }
}

calcularEdad(nacimientos);

/* Kata: Explorando Objetos */
// Lista de mascotas o constructor

function Mascota(nombre, edad, adoptado) {
  this.nombre = nombre;
  this.edad = edad;
  this.adoptado = adoptado;
}

let arrayMascotas =[];

arrayMascotas.push(new Mascota("Perro1", 2, false));
arrayMascotas.push(new Mascota("Perro2", 4, true));
arrayMascotas.push(new Mascota("Perro3", 6, false));
arrayMascotas.push(new Mascota("Perro4", 8, true));
arrayMascotas.push(new Mascota("Perro5", 10, false));

for (let i = 0; i < arrayMascotas.length; i++) {
  console.log( 
    "es un/una: " + arrayMascotas[i].nombre +
    " y su edad es: " + arrayMascotas[i].edad +
    ", y su adopción tiene un estado de: " + arrayMascotas[i].adoptado
    )
}
    