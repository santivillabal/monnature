//const itemsCarrito = JSON.parse(localStorage.getItem("itemsCarrito"))
//const templateFooter = document.getElementById("template-footer").content
//const templateCarrito = document.getElementById("template-carrito").content
//const items = document.getElementById("items")
//const footer = document.getElementById("footer")
//const fragment = document.createDocumentFragment()

//console.log(itemsCarrito)

//const listarCarrito = () => {
 //   items.innerHTML = ""
 //   Object.values(itemsCarrito).forEach(producto =>{
 //       templateCarrito.querySelector("th").textContent = producto.id
  //      templateCarrito.querySelectorAll("td")[0].textContent = producto.nombre
   //     templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
  //      templateCarrito.querySelector(".btn-info").dataset.id = producto.id
 //       templateCarrito.querySelector(".btn-danger").dataset.id = producto.id
//        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.precio
//
  //      const clon = templateCarrito.cloneNode(true)
 //       fragment.appendChild(clon)
//    })
//    items.appendChild(fragment)
//}