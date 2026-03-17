//función para consulta todos los Useros 
async function getAllUsers() {
  getAllData(urlUsers, fieldsUsers);
}

//función para crear los Useros 
async function createUser(event) {
  event.preventDefault()

  createData(urlUsers, event, fieldsUsers)
}

async function updateUser(event) {
  const id = document.getElementById("idUpdate").value;
  const title = document.getElementById("titleUpdate").value;
  const price = document.getElementById("priceUpdate").value;

  const newUser = {
    firstName: title,
    lastName: price
  }

  updateData(id, urlUsers, newUser, event, fieldsUsers)
}

//función para eliminar los Useros 
async function deleteUser(id, event) {
  deleteData(id, urlUsers, event, fieldsUsers)
}

//función para consulta todos los Useros 
async function getFindByIdUser() {
  getFindByIdData(urlUsers, fieldsUsers);
}

async function loadUpdateUser(id, event, url) {
  event.preventDefault()

  let User = await request(get, id, null, url);

  document.getElementById("idUpdate").value = User.id;
  document.getElementById("titleUpdate").value = User.title;
  document.getElementById("priceUpdate").value = User.price;
}



function modalAddUser() {
  modalAdd(fieldsUsers)
}