async function getAllData(url, fields) {
    let array = await request(get, null, null, url);

    var container = document.getElementById("container");
    container.innerHTML = "";

    let list = document.getElementById("lista")

    fields.forEach(element => {
        let th = document.createElement("th")
        th.innerText = element
        list.appendChild(th)
    });

    array.forEach(data => {
        tableLoad(data, fields, url);
    });
}

async function createData(url, event, fields) {
    event.preventDefault()

    let newData = {}

    fieldsUsers.forEach(field => {
        let value = document.getElementById(field + "Create").value;
        newData[field] = value
    });

    await request(post, null, newData, url);

    document.getElementById("modalAgregar").style.display = "none"

    fieldsUsers.forEach(field => {
        document.getElementById(field + "Create").value = null
    });

    reloadPage(url, fields)
}

async function updateData(id, url, newData, event, fields) {
    event.preventDefault()

    await request(put, id, newData, url);

    reloadPage(url, fields)
}

async function deleteData(id, url, event, fields) {
    event.preventDefault()

    await request(deletes, id, null, url);

    reloadPage(url, fields)
}

async function getFindByIdData(url, fields) {
    var id = document.getElementById("idFilter").value

    let data = await request(get, id, null, url);

    container.innerHTML = "";

    tableLoad(data, fields, url);
}

// ===========================
//      MODALES
// ===========================

function modalAdd(fields) {
    let content = document.getElementById("modalAdd-content")
    content.innerHTML = ""

    fields.forEach(element => {
        let label = document.createElement("label")
        label.innerText = element

        let input = document.createElement("input")
        input.type = "text"
        input.required = true
        input.id = element + "Create"

        content.appendChild(label)
        content.appendChild(document.createElement("br"))
        content.appendChild(input)
        content.appendChild(document.createElement("br"))
        content.appendChild(document.createElement("br"))
    });
}