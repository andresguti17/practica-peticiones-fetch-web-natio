async function request(method, id = null, data = null, url) {
  //let url = "http://localhost:3000/products";

  if (id !== null) {
    url = url + "/" + id;
  }

  let options = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (data !== null) {
    options.body = JSON.stringify(data);
  }

  let response = await fetch(url, options);

  return await response.json();
}