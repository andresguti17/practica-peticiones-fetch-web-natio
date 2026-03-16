function reloadPage(url) {
  container.innerHTML = "";
  getAllData(url)
}

async function loadUpdateProduct(id, event) {
  event.preventDefault()

  let product = await request(get, id);

  document.getElementById("idUpdate").value = product.id;
  document.getElementById("titleUpdate").value = product.title;
  document.getElementById("priceUpdate").value = product.price;
}

// Cargar tablas
function tableLoad(product) {
  // Id del contenedor
  var container = document.getElementById("container");

  // Espacios de la tabla
  var register = document.createElement("tr");
  var cellId = document.createElement("td");
  var cellTitle = document.createElement("td");
  var cellPrice = document.createElement("td");
  var options = document.createElement("td");

  // Creación y definición del botón para eliminar
  var deleteButton = document.createElement("button");
  deleteButton.id = product.id
  deleteButton.type = "button"
  deleteButton.className = "btn btn-danger"
  deleteButton.onclick = function () {
    deleteProduct(product.id, event)
  };
  deleteButton.textContent = "Delete"

  // Creación y definición del botón para actualizar
  var updateButton = document.createElement("button");
  updateButton.id = product.id
  updateButton.type = "button"
  updateButton.setAttribute("data-bs-toggle", "modal");
  updateButton.setAttribute("data-bs-target", "#modalActualizar");
  updateButton.className = "btn btn-primary"
  updateButton.onclick = function () {
    loadUpdateProduct(product.id, event)
  }
  updateButton.textContent = "Update"

  // Creación de campos de la tabla
  cellId.innerText = product.id;
  cellTitle.innerText = product.title;
  cellPrice.innerText = product.price;
  options.appendChild(deleteButton)
  options.appendChild(updateButton)

  register.appendChild(cellId);
  register.appendChild(cellTitle);
  register.appendChild(cellPrice);
  register.appendChild(options)
  container.appendChild(register);
}