//función para consulta todos los productos 
async function getAllProducts() {
  getAllData(urlProducts);
}

//función para crear los productos 
async function createProduct(event) {
  const title = document.getElementById("titleCreate").value;
  const price = document.getElementById("priceCreate").value;

  const newProduct = {
    title: title,
    price: price
  }

  createData(urlProducts, newProduct, event)

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

  updateData(urlProducts, newProduct, event)
}

//función para eliminar los productos 
async function deleteProduct(id, event) {
  deleteData(id, urlProducts, event)
}

//función para consulta todos los productos 
async function getFindByIdProduct() {
  getFindByIdData(urlProducts);
}