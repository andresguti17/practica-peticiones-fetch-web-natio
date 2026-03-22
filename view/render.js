import { tableLoad } from "../utils/utils.js"

export function renderHeaders(fields) {
    let list = document.getElementById("lista")
    list.innerHTML = ""
    fields.forEach(field => {
        let th = document.createElement("th")
        th.innerText = field
        list.appendChild(th)
    });
}

export function renderTable(array, fields, url, type) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    array.forEach(data => {
        tableLoad(data, fields, url, type);
    });
}

export function renderModalFields(containerId, fields, suffix) {
    let content = document.getElementById(containerId)
    content.innerHTML = ""
    fields.forEach(field => {
        let label = document.createElement("label")
        label.innerText = field

        let input = document.createElement("input")
        input.type = "text"
        input.required = true
        input.id = field + suffix   // "Create" o "Update"

        content.appendChild(label)
        content.appendChild(document.createElement("br"))
        content.appendChild(input)
        content.appendChild(document.createElement("br"))
        content.appendChild(document.createElement("br"))
    });
}