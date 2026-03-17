async function getAllUsers() {
  getAllData(urlUsers, fieldsUsers);
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
  getFindByIdData(urlUsers, fieldsUsers);
}

async function loadUpdateUser(id, event, url) {
  event.preventDefault()

  let user = await request(get, id, null, url);

  fieldsUsers.forEach(field => {
    document.getElementById(field + "Update").value = user[field]
  });
}



function modalAddUser() {
  modalAdd(fieldsUsers)
}