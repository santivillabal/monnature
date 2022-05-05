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
const desodoranteEnCrema = new Producto("Desodorante en crema", 3, 1300, 100);
const cremaParaManos = new Producto("Crema para manos", 4, 1420, 13);

let carrito = [];
localStorage.setItem("Carrito", JSON.stringify(carrito));


//PRODUCTO 1
const agregarAlCarrito1 = () =>{
    const cantidad1 = document.querySelector("#cant1");
    if (cantidad1.value < desodoranteEnCrema.stock) {
        desodoranteEnCrema.stock - cantidad1.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desodoranteEnCrema.stock + " unidades.");
    }    
}
const aniadir1 = document.querySelector("#btn1");
aniadir1.addEventListener("click", agregarAlCarrito1);

//PRODUCTO 2
const agregarAlCarrito2 = () =>{
    const cantidad2 = document.querySelector("#cant2");
    if (cantidad2.value < desmaquillanteFacial.stock) {
        desmaquillanteFacial.stock - cantidad2.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desmaquillanteFacial.stock + " unidades.");
    }    
}
const aniadir2 = document.querySelector("#btn2");
aniadir2.addEventListener("click", agregarAlCarrito2);

//PRODUCTO 3
const agregarAlCarrito3 = () =>{
    const cantidad3 = document.querySelector("#cant3");
    if (cantidad3.value < cremaCalmante.stock) {
        cremaCalmante.stock - cantidad3.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaCalmante.stock + " unidades.");
    }    
}
const aniadir3 = document.querySelector("#btn3");
aniadir3.addEventListener("click", agregarAlCarrito3);

//PRODUCTO 4
const agregarAlCarrito4 = () =>{
    const cantidad4 = document.querySelector("#cant4");
    if (cantidad4.value < cremaParaManos.stock) {
        cremaParaManos.stock - cantidad4.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaParaManos.stock + " unidades.");
    }    
}
const aniadir4 = document.querySelector("#btn4");
aniadir4.addEventListener("click", agregarAlCarrito4);

//PRODUCTO 5
const agregarAlCarrito5 = () =>{
    const cantidad5 = document.querySelector("#cant5");
    if (cantidad5.value < desodoranteEnCrema.stock) {
        desodoranteEnCrema.stock - cantidad5.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desodoranteEnCrema.stock + " unidades.");
    }    
}
const aniadir5 = document.querySelector("#btn5");
aniadir5.addEventListener("click", agregarAlCarrito5);

//PRODUCTO 6
const agregarAlCarrito6 = () =>{
    const cantidad6 = document.querySelector("#cant6");
    if (cantidad6.value < desmaquillanteFacial.stock) {
        desmaquillanteFacial.stock - cantidad6.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desmaquillanteFacial.stock + " unidades.");
    }    
}
const aniadir6 = document.querySelector("#btn6");
aniadir6.addEventListener("click", agregarAlCarrito6);

//PRODUCTO 7
const agregarAlCarrito7 = () =>{
    const cantidad7 = document.querySelector("#cant7");
    if (cantidad7.value < cremaCalmante.stock) {
        cremaCalmante.stock - cantidad7.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaCalmante.stock + " unidades.");
    }    
}
const aniadir7 = document.querySelector("#btn3");
aniadir7.addEventListener("click", agregarAlCarrito7);

//PRODUCTO 8
const agregarAlCarrito8 = () =>{
    const cantidad8 = document.querySelector("#cant8");
    if (cantidad8.value < cremaParaManos.stock) {
        cremaParaManos.stock - cantidad8.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaParaManos.stock + " unidades.");
    }    
}
const aniadir8 = document.querySelector("#btn8");
aniadir4.addEventListener("click", agregarAlCarrito8);

//PRODUCTO 9
const agregarAlCarrito9 = () =>{
    const cantidad9 = document.querySelector("#cant9");
    if (cantidad9.value < desodoranteEnCrema.stock) {
        desodoranteEnCrema.stock - cantidad9.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desodoranteEnCrema);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desodoranteEnCrema.stock + " unidades.");
    }    
}
const aniadir9 = document.querySelector("#btn9");
aniadir9.addEventListener("click", agregarAlCarrito9);

//PRODUCTO 10
const agregarAlCarrito10 = () =>{
    const cantidad10 = document.querySelector("#cant10");
    if (cantidad10.value < desmaquillanteFacial.stock) {
        desmaquillanteFacial.stock - cantidad10.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(desmaquillanteFacial);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + desmaquillanteFacial.stock + " unidades.");
    }    
}
const aniadir10 = document.querySelector("#btn10");
aniadir10.addEventListener("click", agregarAlCarrito10);

//PRODUCTO 11
const agregarAlCarrito11 = () =>{
    const cantidad11 = document.querySelector("#cant11");
    if (cantidad11.value < cremaCalmante.stock) {
        cremaCalmante.stock - cantidad11.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaCalmante);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaCalmante.stock + " unidades.");
    }    
}
const aniadir11 = document.querySelector("#btn11");
aniadir11.addEventListener("click", agregarAlCarrito11);

//PRODUCTO 12
const agregarAlCarrito12 = () =>{
    const cantidad12 = document.querySelector("#cant12");
    if (cantidad12.value < cremaParaManos.stock) {
        cremaParaManos.stock - cantidad12.value;
        if (localStorage.getItem("Carrito") != null){
            carrito = JSON.parse(localStorage.getItem("Carrito"));
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito));
        } else {
            carrito.push(cremaParaManos);
            localStorage.setItem("Carrito", JSON.stringify(carrito))
        }
    }
    else{
        swal("No hay suficiente stock de este producto. En este momento quedan " + cremaParaManos.stock + " unidades.");
    }    
}
const aniadir12 = document.querySelector("#btn12");
aniadir12.addEventListener("click", agregarAlCarrito12);