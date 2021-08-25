alert("Bienvenido")
let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let contacto = prompt("Ingrese un E-mail: ");



alert(`Hola ${nombre} ${apellido}, complete los siguientes datos.`)

let prestamo1 = "Prestasmo Personal"
let prestamo2 = "Prestamo Hipotecario"
let prestamo3 = "Prestamos Sueldo"
let prestamo4 = "Otros"


// tipo de prestamo
tipoPrestamo = parseInt(prompt(`Eliga el Numero del tipo de prestamo: 1 - ${prestamo1}, 2 - ${prestamo2}, 3 - ${prestamo3}, 4 - ${prestamo4}`))

while (tipoPrestamo < 1 || tipoPrestamo > 4){
    alert ("La opcion ingresa es Incorreccta")
    tipoPrestamo = parseInt(prompt(`Eliga el Numero del tipo de prestamo: 1 - ${prestamo1}, 2 - ${prestamo2}, 3 - ${prestamo3}, 4 - ${prestamo4}`))
}

    if (tipoPrestamo == 1){
        alert("Su Prestamos es Personal")
    } else if (tipoPrestamo == 2) {
        alert("Su Prestamos es Hipotecario")
    } else if (tipoPrestamo == 3) {
        alert("Su Prestamo es Adelanto de Sueldo")
    } else if (tipoPrestamo == 4) {
    otros = prompt("Describa el motivo de su Prestamo")
        alert (`Usted desea adquirir un Prestamo para: ${otros}`)
    }

    importePrestamos = parseInt(prompt(`Ingrese el importe de su Prestamo $`))

while (importePrestamos <= 0) {
    alert("EL IMPORTE ES INVALIDO")
        importePrestamos = parseInt(prompt("Vuelva a ingresar el importe de su Prestamo $"))
}
    alert(`Sr/Sra. ${nombre} ${apellido}  eligio un Prestamos por un importe de $${importePrestamos}, le enviaremos a su Correo: ${contacto} los procesos a seguir.`)
    alert(`MUCHAS GRACIAS`)

