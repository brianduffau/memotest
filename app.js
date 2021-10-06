let dato1 = ""
let id1 = ""
let dato2 = ""
let id2 = ""
let aciertos = 0
let fallos = 0 

let numeros = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]

function asignarNumeros(){
    
    // MEZCLAMOS LOS VALORES DEL ARRAY
    numeros.sort(() => Math.random() - 0.5)

    // DATASET.VALOR ASIGNA UN VALOR DE ATRIBUTO A UN TAG HTML DATA-VALOR (EN ESTE CASO UNO 
    //DE LOS ELEMENTOS DEL ARRAY)
    for(var i=0; i<numeros.length; i++) {
    var numero = numeros[i]
    var dato = document.getElementById(i.toString())
    dato.dataset.valor = numero

    aciertos = 0
    fallos = 0

  }
}

function destapar(){
    let evento = window.event
    dato2 = evento.target.dataset.valor
    id2 = evento.target.id

    // PRIMERO ASIGNAMOS EL VALOR DOS, QUE LUEGO SE ALMACENARA EN EL UNO PARA VOLVER A ITERAR
    // Y COMPLETAR EL PAR DE NUMEROS. EN LA SEGUNDA PASADA, SE COMPROBARA SI SON IGUALES
    // O DIFERENTES. PRIMER CASO: PINTA LA PAREJA DE COLOR. SEGUNDO CASO: LIMPIA LAS ELECCIONES 
    // Y SE VUELVE A JUGAR

    if(dato1 !== ""){
        mostrarNumero(id2, dato2)
        mostrarNumero(id1, dato1)

        if(dato1 === dato2 && id1 !== id2){
            aciertos++
            console.log("aciertos:" + aciertos)
            match()
            vaciar()
        } else {
            ocultarNumeros()           
        }

    } else if (dato2 !== 'valor'){
        mostrarNumero(id2, dato2)
        dato1 = dato2
        id1 = id2
    }

    // REVISAR
    if(aciertos == numeros.length/2){
        mensaje()
    }
}

function vaciar()  {
    dato1 = ""
    dato2 = ""

    id1 = ""
    id2 = ""
}

function mostrarNumero(id, dato){
    let celda = document.getElementById(id.toString())
    celda.innerHTML = dato
}

function ocultarNumeros(){
    fallos++
    console.log("fallos:" + fallos)
    setTimeout(() => {
                document.getElementById(id1.toString()).innerHTML = "?"
                document.getElementById(id2.toString()).innerHTML = "?"
                vaciar()
            }, 600)
}

function match(){
    document.getElementById(id1.toString()).style.backgroundColor = "#5D2A42"
    document.getElementById(id1.toString()).style.color = "#FFDCCC"
    document.getElementById(id2.toString()).style.backgroundColor = "#5D2A42"
    document.getElementById(id2.toString()).style.color = "#FFDCCC"
}

function mensaje(){
    let divMensaje = document.getElementById('mensaje')
    let espacioMensaje = document.createElement("h3")
    let mensaje = document.createTextNode("BUENA MEMORIA!!")
    espacioMensaje.appendChild(mensaje)
    divMensaje.appendChild(espacioMensaje)

}

asignarNumeros()