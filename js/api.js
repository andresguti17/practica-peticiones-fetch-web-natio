async function request(method, id = null, product = null, url) {
  //let url = "http://localhost:3000/products";

  if (id !== null) {
    url = url + "/" + id;
  }

  let options = {
    method: method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (product !== null) {
    options.body = JSON.stringify(product);
  }

  let response = await fetch(url, options);

  return await response.json();
}