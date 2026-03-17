async function getAllPosts() {
  getAllData(urlPosts, fieldsPosts, posts);
}

async function createPost(event) {
  event.preventDefault()

  createData(urlPosts, event, fieldsPosts)
}

async function updatePost(event) {
  updateData(urlPosts, event, fieldsPosts)
}

async function deletePost(id, event) {
  deleteData(id, urlPosts, event, fieldsPosts)
}

async function getFindByIdPost() {
  getFindByIdData(urlPosts, fieldsPosts, posts);
}

async function loadUpdatePost(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsPosts)
}

function modalAddPost() {
  modalAdd(fieldsPosts)
}