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

    //Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.

//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.

//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.

//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.