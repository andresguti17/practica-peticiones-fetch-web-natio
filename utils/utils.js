import { getAllData } from "../viewmodel/crud.js";

export async function reloadPage(url, fields, type) {
    var container = document.getElementById("container");

    container.innerHTML = "";
    await getAllData(url, fields, type)
}



// Cargar tablas
export async function tableLoad(data, fields, url, type) {
    var container = document.getElementById("container");
    var register = document.createElement("tr");

    fields.forEach(field => {
        var cell = document.createElement("td")
        cell.innerText = data[field];
        register.appendChild(cell)
    });

    var options = document.createElement("td");

    var deleteButton = document.createElement("button");
    //deleteButton.id = data.id
    deleteButton.type = "button"
    deleteButton.className = "btn btn-danger"

    deleteButton.dataset.action = "delete";
    deleteButton.dataset.id = data.id;
    deleteButton.dataset.type = type;
    //deleteButton.onclick = (event) => window["delete" + type](data.id, event);
    deleteButton.textContent = "Delete"

    var updateButton = document.createElement("button");
    //updateButton.id = data.id
    updateButton.type = "button"
    updateButton.setAttribute("data-bs-toggle", "modal");
    updateButton.setAttribute("data-bs-target", "#modalActualizar");
    updateButton.className = "btn btn-primary"

    updateButton.dataset.action = "update";
    updateButton.dataset.id = data.id;
    updateButton.dataset.type = type;
    //updateButton.onclick = function () {
    //    window["loadUpdate" + type](data.id, event, url);
    //}
    updateButton.textContent = "Update"


    options.appendChild(deleteButton)
    options.appendChild(updateButton)

    //options.style.gap = "30px"

    register.appendChild(options)
    container.appendChild(register);
}