import { get, post, put, deletes } from "../model/const.js"
import { request } from "./api.js"
import { reloadPage } from "./utils.js"
import { renderTable, renderHeaders, renderModalFields } from "../../view/render.js"

export async function getAllData(url, fields, type) {
    let array = await request(get, null, null, url);
    renderHeaders(fields);          // ← render delegado a la View
    renderTable(array, fields, url, type);
}

export async function createData(url, event, fields) {
    event.preventDefault()
    let newData = {}
    fields.forEach(field => {
        newData[field] = document.getElementById(field + "Create").value;
    });
    await request(post, null, newData, url);
    document.getElementById("modalAgregar").style.display = "none"
    fields.forEach(field => document.getElementById(field + "Create").value = null);
    reloadPage(url, fields)
}

export async function updateData(url, event, fields, type) {
    event.preventDefault()
    let newData = {}
    fields.forEach(field => {
        newData[field] = document.getElementById(field + "Update").value;
    });
    await request(put, newData.id, newData, url);
    document.getElementById("modalActualizar").style.display = "none"
    reloadPage(url, fields, type)
}

export async function deleteData(id, url, event, fields, type) {
    event.preventDefault()
    await request(deletes, id, null, url);
    reloadPage(url, fields, type)
}

export async function getFindByIdData(url, fields, type) {
    let id = document.getElementById("idFilter").value
    let data = await request(get, id, null, url);
    document.getElementById("container").innerHTML = "";
    renderTable([data], fields, url, type);  // ← mismo render, un solo item
}

export function modalAdd(fields) {
    renderModalFields("modalAdd-content", fields, "Create"); // ← render delegado
}

export async function loadUpdateData(id, url, fields) {
    renderModalFields("modalUpdate-content", fields, "Update");
    let data = await request(get, id, null, url);
    fields.forEach(field => {
        document.getElementById(field + "Update").value = data[field]
    });
}