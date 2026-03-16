//función para consulta todos los Cartos 
async function getAllCarts() {
  getAllData(urlCarts, fieldsCarts);
}

//función para crear los Cartos 
async function createCart(event) {
  const title = document.getElementById("titleCreate").value;
  const price = document.getElementById("priceCreate").value;

  const newCart = {
    title: title,
    price: price
  }

  createData(urlCarts, newCart, event, fieldsCarts)

  document.getElementById("titleCreate").value = null;
  document.getElementById("priceCreate").value = null;
}

async function updateCart(event) {
  const id = document.getElementById("idUpdate").value;
  const title = document.getElementById("titleUpdate").value;
  const price = document.getElementById("priceUpdate").value;

  const newCart = {
    title: title,
    price: price
  }

  updateData(id, urlCarts, newCart, event, fieldsCarts)
}

//función para eliminar los Cartos 
async function deleteCart(id, event) {
  deleteData(id, urlCarts, event, fieldsCarts)
}

//función para consulta todos los Cartos 
async function getFindByIdCart() {
  getFindByIdData(urlCarts, fieldsCarts);
}

async function loadUpdateCart(id, event, url) {
  event.preventDefault()

  let Cart = await request(get, id, null, url);

  document.getElementById("idUpdate").value = Cart.id;
  document.getElementById("titleUpdate").value = Cart.title;
  document.getElementById("priceUpdate").value = Cart.price;
}