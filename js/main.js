class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}
const cremaCalmante = new Producto("Crema calmante", 1250, 25);
const desmaquillanteFacial = new Producto("Desmaquillante facial", 1250, 24);
const desodoranteEnCrema = new Producto("Desodorante en crema", 1250, 10);


let catalogo = [cremaCalmante, desmaquillanteFacial, desodoranteEnCrema];

const agregarAlCatalogo = () =>{
    let nombre = prompt("Ingrese nombre del nuevo producto");
    let precio = parseFloat(prompt("Ingrese precio"));
    let stock = parseInt(prompt("Ingrese stock"));
    let producto = new Producto (nombre, precio, stock);
    catalogo.push(producto);
    return alert("El nuevo producto es: "+nombre+". Cuesta $"+precio+" y hay "+stock+" unidades en stock.");
}



//function compra(precio, codigo){
//    let precioTotal = precio + (precio * 21 / 100);
//    switch (codigo){
//        case "DTO10":
//            return alert ("Precio total final: $" + (precioTotal - (precioTotal * 10 / 100)));
//            break;
//        case "DTO15":
//            return alert ("Precio total final: $" + (precioTotal - (precioTotal * 15 / 100)));
//            break;
//        case "DTO25":
//            return alert ("Precio total final: $" + (precioTotal - (precioTotal * 25 / 100)));
//            break;
//        default:
//            return alert ("Código inválido. Precio total final: $" + precioTotal);
//    }
//}
//function comprafinal(){
//    let precioProducto = parseFloat(prompt("Ingrese precio del producto"));
//    let codigoDto = prompt("Ingrese código de descuento");
//    return compra(precioProducto, codigoDto)
//}