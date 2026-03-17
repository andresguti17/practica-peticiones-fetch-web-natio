async function getAllProducts() {
  getAllData(urlProducts, fieldsProducts);
}

async function createProduct(event) {
  event.preventDefault()

  createData(urlUsers, event, fieldsUsers)
}

async function updateProduct(event) {
  updateData(urlProducts, event, fieldsProducts)
}

async function deleteProduct(id, event) {
  deleteData(id, urlProducts, event, fieldsProducts)
}

async function getFindByIdProduct() {
  getFindByIdData(urlProducts, fieldsProducts);
}

async function loadUpdateProduct(id, event, url) {
  event.preventDefault()

  let product = await request(get, id, null, url);

  fieldsProducts.forEach(field => {
    document.getElementById(field + "Update").value = product[field]
  });
}



function modalAddProduct() {
  modalAdd(fieldsProducts)
}