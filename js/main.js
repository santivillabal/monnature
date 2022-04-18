class Producto{
    constructor(nombre, id, precio, stock){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
        
    }
}

const cremaCalmante = new Producto("Crema calmante", 1, 1250, 20);
const desmaquillanteFacial = new Producto("Desmaquillante facial", 2, 1250, 24);
const desodoranteEnCrema = new Producto("Desodorante en crema", 3, 1250, 10);
const cremaParaManos = new Producto("Crema para manos", 4, 1250, 13);

let catalogo = [cremaCalmante, desmaquillanteFacial, desodoranteEnCrema, cremaParaManos];

let carrito = [];

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

function codigoDescuento (){
    let codigo = document.getElementById("codigo").value;
    let carrito__total = document.getElementById("total");
    let mensaje = document.getElementById("mensaje");
    let precioPorCantidad = 1512.5;
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

function elegirProducto(search){
let buscar = catalogo.find(obj => {
    return obj.id == search;
    })
}

function compra(){
    let search = prompt("Elija un producto");
    elegirProducto(search)
    let cantidad = parseInt(prompt("Qué cantidad desea comprar?"));
    let codigo = prompt("Ingrese su código de descuento");
    controlDeStock(cantidad);
    codigoDescuento(codigo);
}

