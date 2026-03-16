async function getAllData(url, fields) {
    let array = await request(get, null, null, url);

    var container = document.getElementById("container");
    container.innerHTML = "";

    array.forEach(data => {
        tableLoad(data, fields, url);
    });
}

async function createData(url, newData, event, fields) {
    event.preventDefault()

    await request(post, null, newData, url);

    document.getElementById("modalAgregar").style.display = "none"

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