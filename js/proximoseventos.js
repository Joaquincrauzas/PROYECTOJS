let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const botonComprar = document.getElementById("botonComprar");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cardUno = document.getElementById("cardUno");

class eventos {
  constructor(id, imagen, nombre, precio, lugar) {
    this.id = id;
    this.imagen = imagen;
    this.nombre = nombre;
    this.precio = precio;
    this.lugar = lugar;
  }
}

const evento1 = new eventos(
  1,
  "eventouno.jpg",
  "SOLOMUN",
  10000,
  "Mandarine Park"
);
const evento2 = new eventos(
  2,
  "eventodos.jpg",
  "OLIVER KOLETZKI",
  5000,
  "Moscu Club"
);
const evento3 = new eventos(
  3,
  "nicorada.jpg",
  "NICOLAS RADA",
  8000,
  "Mandarine Park"
);

const Fiestas = [evento1, evento2, evento3];

Fiestas.forEach((fiestasArray) => {
  cardUno.innerHTML += `
  <div class="card text-white eventodos"  id="eventos ${fiestasArray.id}"  style="width: 100%;">
    <div class="card-body text-center">
      <img src ="./IMAGENES/${fiestasArray.imagen}"/>
      <h5 class= "card-title"> ${fiestasArray.nombre}</h5>
      <p class= "card-text"> $${fiestasArray.precio}</p>
      <p class = "card-text"> En ${fiestasArray.lugar}</p>
      <btn id="${fiestasArray.id}" class ="btn btn-dark botonComprar">COMPRAR </btn>
    </div>
  </div> 
  `;
});
const botones = document.querySelectorAll(".botonComprar");

botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    let idtarjeta = parseInt(e.target.id)
    let evento = Fiestas.find(evento=>evento.id === idtarjeta)
    carrito.push(evento);
    saveLocal ()
  });
});

const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify (carrito));
}


JSON.parse(localStorage.getItem("carrito"));
