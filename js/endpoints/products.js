async function getAllProducts() {
  getAllData(urlProducts, fieldsProducts, products);
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
  getFindByIdData(urlProducts, fieldsProducts, products);
}

async function loadUpdateProduct(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsProducts)
}

function modalAddProduct() {
  modalAdd(fieldsProducts)
}