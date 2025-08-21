let amigos = [];

function verificarIngreso() {
    
    let escribeUnNombre = document.getElementById("amigo").value;

    if (escribeUnNombre === "") {
        alert("escribe un nombre, por favor");
        return;
        
    }

    if (amigos.includes(escribeUnNombre)) {
        limpiarCaja();
        return;
        
    }
    amigos.push(escribeUnNombre);
    mostrarLista();
    limpiarCaja();
}

    
function limpiarCaja() {
    let valorCaja = document.getElementById("amigo")
    valorCaja.value = "";
}   

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}
  for (let i = 0; i < amigos.length; i++) {
        const element = amigos[i];
        
        lista.innerHTML += "<li>" + element + "</li>";
    }

//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.

//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.

//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.

//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.