async function getAllUsers() {
  getAllData(urlUsers, fieldsUsers, users);
}

async function createUser(event) {
  event.preventDefault()

  createData(urlUsers, event, fieldsUsers)
}

async function updateUser(event) {
  updateData(urlUsers, event, fieldsUsers)
}

async function deleteUser(id, event) {
  deleteData(id, urlUsers, event, fieldsUsers)
}

async function getFindByIdUser() {
  getFindByIdData(urlUsers, fieldsUsers, users);
}

async function loadUpdateUser(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsUsers)
}

function modalAddUser() {
  modalAdd(fieldsUsers)
}