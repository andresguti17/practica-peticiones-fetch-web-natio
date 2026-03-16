async function getAllData(url) {
  let array = await request(get, null, null, url);

  var container = document.getElementById("container");
  container.innerHTML = "";

  array.forEach(data => {
    tableLoad(data);
  });
}

async function createData(url, newData, event) {
  event.preventDefault()

  await request(post, null, newData, url);

  document.getElementById("modalAgregar").style.display = "none"

  reloadPage(url)
}

async function updateData(url, newData, event) {
  event.preventDefault()

  await request(put, id, newData, url);

  reloadPage(url)
}

async function deleteData(id, url, event) {
  event.preventDefault()

  await request(deletes, id, null, url);

  reloadPage(url)
}

async function getFindByIdData(url) {
  var id = document.getElementById("idFilter").value

  let data = await request(get, id, null, url);

  container.innerHTML = "";

  tableLoad(data);
}