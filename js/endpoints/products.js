//función para consulta todos los productos 
async function getAllProducts() {
  getAllData(urlProducts, fieldsProducts);
}

//función para crear los productos 
async function createProduct(event) {
  const title = document.getElementById("titleCreate").value;
  const price = document.getElementById("priceCreate").value;

  const newProduct = {
    title: title,
    price: price
  }

  createData(urlProducts, newProduct, event, fieldsProducts)

  document.getElementById("titleCreate").value = null;
  document.getElementById("priceCreate").value = null;
}

async function updateProduct(event) {
  const id = document.getElementById("idUpdate").value;
  const title = document.getElementById("titleUpdate").value;
  const price = document.getElementById("priceUpdate").value;

  const newProduct = {
    title: title,
    price: price
  }

  updateData(id, urlProducts, newProduct, event, fieldsProducts)
}

//función para eliminar los productos 
async function deleteProduct(id, event) {
  deleteData(id, urlProducts, event, fieldsProducts)
}

//función para consulta todos los productos 
async function getFindByIdProduct() {
  getFindByIdData(urlProducts, fieldsProducts);
}

async function loadUpdateProduct(id, event, url) {
  event.preventDefault()

  let product = await request(get, id, null, url);

  document.getElementById("idUpdate").value = product.id;
  document.getElementById("titleUpdate").value = product.title;
  document.getElementById("priceUpdate").value = product.price;
}



function modalAddProduct() {
  modalAdd(fieldsProducts)
}