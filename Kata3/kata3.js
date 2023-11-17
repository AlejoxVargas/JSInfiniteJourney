/* Kata: Explorando las clases */

//Gestion de vehículos
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  mostrarDetalles() {
    console.log(
      `Nombre: ${this.marca}, Tipo: ${this.modelo}, Edad: ${this.anio}`
    );
  }
}

// Crear una instancia (objeto) de la clase Mascota
let miAuto = new Vehiculo("Nissan", "GTR R35", 2024);

miAuto.mostrarDetalles();

/* Kata: Explorando el DOM */
// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};


openModalBtn.addEventListener("click", openModal);

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

openModalBtn.addEventListener("click", openModal);

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
