
function menuPrincipal() {
    let total = 0
    let menu
    do{
        alert("Seleccione la opcion que desea")
        menu = prompt("1-Comprar una torta \n 2-Cerrar Pedido \n 3- Sallir")
        menu = parseInt(menu)
        switch (menu) {
            case 1: total = total + comprarTortas()
                break
            case 2: alert("El total acumulado es $"+ total)
                total = 0
                break
            case 3: alert("Saliendo")
                break
            default: alert("Opcion invalida")
    }
}while (menu != 3)
}

function comprarTortas() {
    let acumulador = 0
    alert("Seleccione el tipo de torta que va a querer")
    alert("1-Torta frutal $3500 \n 2-Torta de cumpleaños $5500")
    let cake = parseInt(prompt ("Que torta le gustaria comprar"))
    switch (cake) {
        case 1: acumulador = 3500
            break
        case 2: acumulador = 5500
            break
        default: alert("Opcion invalida")
    }
    return acumulador
}


menuPrincipal()
console.log(menuPrincipal)