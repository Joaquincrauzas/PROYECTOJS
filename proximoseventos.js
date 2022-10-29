
let evento1 = parseInt(prompt('¿A qué boliche queres a ir?1.The Bow $5000 2.-Mandarine Park $10000 3.-Club Araoz $2000'))
let evento2 = parseInt(prompt('¿Cuantas entradas queres comprar?'))
let evento3 = parseInt(prompt('¿En cuantas cuotas sin interes: 3 - 6 - 9'))
let totalcompra = 0
let decision

function cantidadEntradas1(p1,p2,p3){
    let resultado = totalcompra + 5000 * evento2 / evento3
    return resultado
}
function cantidadEntradas2(p1,p2,p3){
    let resultado = totalcompra + 10000 * evento2 / evento3
    return resultado
}
function cantidadEntradas3(p1,p2,p3){
    let resultado = totalcompra + 2000 * evento2 / evento3
    return resultado
}
function calculadoradeEntradas(p1,p2,p3){
    let resultado
    if (evento3 === 3 ){
        resultado = cantidadEntradas1 (p1,p2,p3)
    } else if (evento3 === 6 ){
        resultado = cantidadEntradas2 (p1,p2,p3)
    } else if (evento3 === 9 ){
        resultado = cantidadEntradas3 (p1,p2,p3)
    } return resultado
}
const totalEntradas = calculadoradeEntradas (evento1,evento2,evento3)
alert (`Tu monto a pagar es ${totalEntradas}`)





















// let nombre = prompt ('Bienvenido a Parque Chaca Producciones ¿cómo te llamas?')
// let evento = parseInt(prompt(`${nombre} Hoy abren los siguientes boliches: 1. The Bow $5000 2. Mandarine Park $10000 3. Club Araoz $4000`))

// let seguirComprando = true
// let totalCompra = 0 
// let decision
// while (seguirComprando === true){
//     if (evento === 1){
//         totalCompra = totalCompra + $5000
//     } else if(evento === 2){
//         totalCompra = totalCompra + $10000
//     } else if(evento === 3){
//         totalCompra = totalCompra + $4000
//     } else {
//         let evento = parseInt(prompt(`${nombre} Hoy abren los siguientes boliches: 1. The Bow $5000 2. Mandarine Park $10000 3. Club Araoz $4000`))
//         continue
//     }
//     decision = parseInt(prompt(`${nombre} ¿quieres comprar mas entradas? 1. SI 2.NO`))
//     if (decision === 1){
//         evento = parseInt(prompt(`${nombre} Hoy abren los siguientes boliches: 1. The Bow $5000 2. Mandarine Park $10000 3. Club Araoz $4000`))
//     } else {
//         seguirComprando = false
//     }
// }

// function descuento(totalCompra) {
//     let resultado = totalCompra * 0.9
//     alert(`${nombre} Gracias por pensar en mis attrezzos para regalar-te. Te doy un 10% de descuento en tu compra y el total es $ ${resultado}`)
// }

// if (totalCompra >= 2000) {
//     descuento(totalCompra)

// } else {

//     alert(`${nombre} El total de tu compra es ${totalCompra}`)
// }