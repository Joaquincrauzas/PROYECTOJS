
class Evento{
  constructor (id, nombre, precio, lugar){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.lugar = lugar
  }
}

const evento0 = new Evento(0, "guy j", 1000, "caba");
const evento1 = new Evento(1, "guy mantzur", 1000, "caba");
const evento2 = new Evento(2, "nick warren", 1000, "caba");
const evento3 = new Evento(3, "solomun", 1000, "caba");

const eventos = [evento0, evento1, evento2, evento3];


const carrito = []

let eventosOfrecidos ="Se vienen los siguientes eventos"


function agregarEntradas(){
  for (entradas of eventos){
    eventosOfrecidos +=  `\n ${entradas.id} - ${entradas.nombre} cada entrada vale $ ${entradas.precio} y es en ${entradas.lugar}`
    }

    eventosOfrecidos += `\n Ingrese el numero del evento al que desea ir sino elija 5`
    let respuesta = parseInt(prompt(eventosOfrecidos))

    while (isNaN(respuesta)){
      alert ("Elegi un numero del 0 al 3 ")
      respuesta = parseInt(prompt(eventosOfrecidos))
    }

    while (respuesta != 5){
        switch(respuesta){
          case 0: 
            carrito.push(eventos[0])
            alert (`Agregado al carrito el ${eventos[0].nombre}`)
            break;
          case 1: 
            carrito.push(eventos[1])
            alert (`Agregado al carrito el ${eventos[1].nombre}`)
            break;
          case 2: 
            carrito.push(eventos[2])
            alert (`Agregado al carrito el ${eventos[2].nombre}`)
            break;
          case 3: 
            carrito.push(eventos[3])
            alert (`Agregado al carrito el ${eventos[3].nombre}`)
            break;
          default:
            alert (`No tenemos producto para ese número`)
            break;
        }
        respuesta = parseInt(prompt(eventosOfrecidos))
    }
    alert ("Terminó tu tiempo de compra")
    mostrarCarrito()
}

let eventosElegidos = `Compraste entradas para los eventos:`
let precioEventos = 0
agregarEntradas()


function mostrarCarrito(){
  for(compras of carrito){
    eventosElegidos += `\n ${compras.nombre}`
    precioEventos += compras.precio
  }

  alert(`\n ${eventosElegidos} por un total de ${precioEventos}`)
}


// let evento5 = parseInt(prompt('¿A qué boliche queres a ir?1.The Bow $5000 2.-Mandarine Park $10000 3.-Club Araoz $2000'))
// let evento6 = parseInt(prompt('¿Cuantas entradas queres comprar?'))
// let evento7 = parseInt(prompt('¿En cuantas cuotas sin interes: 3 - 6 - 9'))
// let totalcompra = 0
// let decision

// function cantidadEntradas1(p1,p2,p3){
//     let resultado = totalcompra + 5000 * evento6 / evento7
//     return resultado
// }
// function cantidadEntradas2(p1,p2,p3){
//     let resultado = totalcompra + 10000 * evento6 / evento7
//     return resultado
// }
// function cantidadEntradas3(p1,p2,p3){
//     let resultado = totalcompra + 2000 * evento6 / evento7
//     return resultado
// }
// function calculadoradeEntradas(p1,p2,p3){
//     let resultado
//     if (evento3 === 3 ){
//         resultado = cantidadEntradas1 (p1,p2,p3)
//     } else if (evento3 === 6 ){
//         resultado = cantidadEntradas2 (p1,p2,p3)
//     } else if (evento3 === 9 ){
//         resultado = cantidadEntradas3 (p1,p2,p3)
//     } return resultado
// }
// const totalEntradas = calculadoradeEntradas (evento1,evento2,evento3)
// alert (`Tu monto a pagar es ${totalEntradas}`)


// class Evento {
//   constructor (id, nombre,precio,lugar){
//     this.id = id
//     this.nombre = nombre
//     this.precio = precio
//     this.lugar = lugar
//   }
// }
// const evento0 = new Evento(0,"Guy J", 10000, "Mandarine Park")
// const evento1 = new Evento(1,"Tale Of Us", 15000, "Old Skull Park")
// const evento2 = new Evento(2,"Colombo", 9000, "Old Skull Park")


// const eventos = [evento0, evento1, evento2]

// const divEventos = document.getElementById("divEventos")

// eventos.forEach(eventosArray => {
//   divEventos.innerHTML += `
//   <div class="card" style="width: 18rem;">
//     <div class="card-body">
//       <h5 class="card-title">${eventosArray.nombre}</h5>
//       <p class="card-text"> Precio: $${eventosArray.precio}</p>
//       <p class="card-text">Lugar: ${eventosArray.lugar}</p>
//       <button class="btn btn-dark"> COMPRAR </button>
//     </div>
//   </div>
//   `
// })


