//ENTIDADES

//VARIABLES

//FUNCIONES



const verificarStorage = () => {
    let lista = [];
    if(localStorage.getItem("Carrito") != null) {
        lista = JSON.parse(localStorage.getItem("Carrito"));
        return lista;
    }
}

const eliminarProducto = (id) => {
    let carrito = JSON.parse(localStorage.getItem("Carrito"));
    let carritoFiltrado = carrito.filter(obj => producto.id != id);
    localStorage.setItem("Carrito", JSON.stringify(carritoFiltrado));
    location.reload();
}

const imprimirEnCarrito = () => {
    if (verificarStorage() != undefined) {
        verificarStorage().forEach(producto => {
            document.querySelector(table).innerHTML += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>${producto.id}</td>
                    <td>${producto.precio}</td>
                    <td><button onclick="eliminarProducto(${obj.id})">X</button></td>
                </tr>
            `
        })
    }
}

const btnCarrito = document.querySelector(".verCarrito");
btnCarrito.addEventListener("click", imprimirEnCarrito);

function controlDeStock(cantidad) {  
    if (this.stock >= cantidad) {
            this.stock = this.stock - cantidad;
            let precioPorCantidad = this.precio * cantidad;
            return precioPorCantidad;
    }
    else{
        alert("No hay suficiente stock de este producto. En este momento quedan " + this.stock + " unidades.");
    }
}


         //FUNCIONES BIEN//

function iva(precioTotal){
    return precioTotal - precioTotal*0.21;
}

const sumatoriaCarrito = () =>{
    let sumatoria = 0;
    for(let producto of carrito){
        sumatoria = sumatoria + producto.precio;
    }
    return iva(sumatoria);
}

function codigoDescuento (){
    let codigo = document.getElementById("codigo").value;
    let carrito__total = document.getElementById("total");
    let mensaje = document.getElementById("mensaje");
    let precioPorCantidad = sumatoriaCarrito(carrito);
    switch (codigo){
        case "DTO10":
            carrito__total.innerText = `Total: $${(precioPorCantidad - (precioPorCantidad * 10 / 100))}.`;
            mensaje.innerText = "Código aplicado.";
            break;
        case "DTO15":
            carrito__total.innerText = `Total: $${(precioPorCantidad - (precioPorCantidad * 15 / 100))}.`;
            mensaje.innerText = "Código aplicado.";
            break;
        case "DTO25":
            carrito__total.innerText = `Total: $${(precioPorCantidad - (precioPorCantidad * 25 / 100))}.`;
            mensaje.innerText = "Código aplicado.";
            break;
        default:
            mensaje.innerText = "Código inválido.";
    }
}
const boton = document.querySelector("#btn");
boton.addEventListener("click", codigoDescuento);


