const cart = document.querySelector("#cart")
const cartModalOverlay = document.querySelector(".cart-modal-overlay")
const closeBtn = document.querySelector("#close-btn")
const cards = document.getElementById("cards")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()
const templateFooter = document.getElementById("template-footer").content
const templateCarrito = document.getElementById("template-carrito").content
const items = document.getElementById("items")
const footer = document.getElementById("footer")
let carrito = {}


cart.addEventListener("click", () =>{
    cartModalOverlay.classList.add("open")
})
closeBtn.addEventListener("click", () =>{
    cartModalOverlay.classList.remove("open")
})
cartModalOverlay.addEventListener("click", (e) =>{
    if(e.target.classList.contains("cart-modal-overlay")){
        cartModalOverlay.classList.remove("open")
    }
})





document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

cards.addEventListener("click", e => {
    agregarCarrito(e)
})

items.addEventListener("click", e =>{
    btnAccion(e)
})

const fetchData = async() =>{
    try {
        const res = await fetch("api.json")
        const data = await res.json()
        catalogo(data)
    }
    catch (error){
        console.log(error)
    }
}

const catalogo = data =>{
    data.forEach(producto => {
        templateCard.querySelector("h5").textContent = producto.nombre
        templateCard.querySelector("#precio").textContent = producto.precio
        templateCard.querySelector(".fotoproducto").setAttribute("src", producto.foto)
        templateCard.querySelector(".botoncard").dataset.id = producto.id
        let stock = producto.stock

        const clon = templateCard.cloneNode(true)
        fragment.appendChild(clon)
    })
    cards.appendChild(fragment)
}

const agregarCarrito = e => {
    if (e.target.classList.contains("botoncard")){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector(".botoncard").dataset.id,
        nombre: objeto.querySelector("h5").textContent,
        precio: objeto.querySelector("#precio").textContent,
        cantidad: 1,
    }
    if (carrito.hasOwnProperty(producto.id)){
        //producto.cantidad = carrito[producto.id].cantidad + 1
        swal("Este producto ya est?? en el carrito")
    }
    carrito[producto.id] = {...producto}
    listarCarrito()
}



const listarCarrito = () => {
    items.innerHTML = ""
    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio

        const clon = templateCarrito.cloneNode(true)
        fragment.appendChild(clon)
    })
    items.appendChild(fragment)
    listarFooter()
}

const listarFooter = () => {
    footer.innerHTML = ""
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vac??o</th>`
        return
    }
    const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)
    templateFooter.querySelectorAll("td")[0].textContent = nCantidad
    document.querySelector(".cart-quantity").textContent = nCantidad
    templateFooter.querySelector("span").textContent = nPrecio

    const clon = templateFooter.cloneNode(true)
    fragment.appendChild(clon)
    footer.appendChild(fragment)
    const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener("click", () => {
        carrito = {}
        document.querySelector(".cart-quantity").textContent = 0
        listarCarrito()
    })

        let carrito__total = document.getElementById("total");
        carrito__total.innerText = "$" + nPrecio


    const codigoDescuento = () =>{
        let codigo = document.getElementById("codigo").value;
        let mensaje = document.getElementById("mensaje");
        switch (codigo){
            case "DTO10":
                carrito__total.innerText = "$" + (nPrecio - nPrecio * 0.1)
                mensaje.innerText = "C??digo aplicado.";
                console.log(carrito__total)
                break;
            case "DTO25":
                carrito__total.innerText = "$" + (nPrecio - nPrecio * 0.25)
                mensaje.innerText = "C??digo aplicado.";
                break;
            default:
                mensaje.innerText = "C??digo inv??lido.";
        }
        
    }
    const boton = document.querySelector("#btn");
    boton.addEventListener("click", codigoDescuento);
    


}

const btnAccion = e =>{
    if(e.target.classList.contains("btnmas")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
        listarCarrito()
    }
    if(e.target.classList.contains("btnmenos")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad --
        carrito[e.target.dataset.id] = {...producto}
        listarCarrito()
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
            listarCarrito()
        }
        listarCarrito()
    }
    e.stopPropagation()
}






