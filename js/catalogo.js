class Producto{
    constructor(nombre, id, precio, stock){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
        
    }
}

const cremaCalmante = new Producto("Crema calmante", 1, 1250, 20);
const desmaquillanteFacial = new Producto("Desmaquillante facial", 2, 1000, 24);
const desodoranteEnCrema = new Producto("Desodorante en crema", 3, 1300, 10);
const cremaParaManos = new Producto("Crema para manos", 4, 1420, 13);

let carrito = [];
localStorage.setItem("Carrito", JSON.stringify(carrito));

//PRODUCTO 1
const agregarAlCarrito1 = () =>{
    if (localStorage.getItem("Carrito") != null){
        carrito = JSON.parse(localStorage.getItem("Carrito"));
        carrito.push(desodoranteEnCrema);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
    } else {
        carrito.push(desodoranteEnCrema);
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    }
}
const aniadir1 = document.querySelector("#btn1");
aniadir1.addEventListener("click", agregarAlCarrito1);

//PRODUCTO 2
const agregarAlCarrito2 = () =>{
    if (localStorage.getItem("Carrito") != null){
        carrito = JSON.parse(localStorage.getItem("Carrito"));
        carrito.push(desmaquillanteFacial);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
    } else {
        carrito.push(desmaquillanteFacial);
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    }
}
const aniadir2 = document.querySelector("#btn2");
aniadir2.addEventListener("click", agregarAlCarrito2);

//PRODUCTO 3
const agregarAlCarrito3 = () =>{
    if (localStorage.getItem("Carrito") != null){
        carrito = JSON.parse(localStorage.getItem("Carrito"));
        carrito.push(cremaCalmante);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
    } else {
        carrito.push(cremaCalmante);
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    }
}
const aniadir3 = document.querySelector("#btn3");
aniadir3.addEventListener("click", agregarAlCarrito3);

//PRODUCTO 4
const agregarAlCarrito4 = () =>{
    if (localStorage.getItem("Carrito") != null){
        carrito = JSON.parse(localStorage.getItem("Carrito"));
        carrito.push(cremaParaManos);
        localStorage.setItem("Carrito", JSON.stringify(carrito));
    } else {
        carrito.push(cremaParaManos);
        localStorage.setItem("Carrito", JSON.stringify(carrito))
    }
}
const aniadir4 = document.querySelector("#btn4");
aniadir4.addEventListener("click", agregarAlCarrito4);

