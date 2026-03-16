async function reloadPage(url, fields) {
    var container = document.getElementById("container");

    container.innerHTML = "";
    await getAllData(url, fields)
}



// Cargar tablas
async function tableLoad(data, fields, url) {
    var container = document.getElementById("container");
    var register = document.createElement("tr");

    fields.forEach(field => {
        var cell = document.createElement("td")
        cell.innerText = data[field];
        register.appendChild(cell)
    });

    var options = document.createElement("td");

    var deleteButton = document.createElement("button");
    deleteButton.id = data.id
    deleteButton.type = "button"
    deleteButton.className = "btn btn-danger"
    deleteButton.onclick = (event) => deleteProduct(data.id, event);
    deleteButton.textContent = "Delete"

    var updateButton = document.createElement("button");
    updateButton.id = data.id
    updateButton.type = "button"
    updateButton.setAttribute("data-bs-toggle", "modal");
    updateButton.setAttribute("data-bs-target", "#modalActualizar");
    updateButton.className = "btn btn-primary"
    updateButton.onclick = function () {
        loadUpdateProduct(data.id, event, url)
    }
    updateButton.textContent = "Update"


    options.appendChild(deleteButton)
    options.appendChild(updateButton)

    register.appendChild(options)
    container.appendChild(register);
}