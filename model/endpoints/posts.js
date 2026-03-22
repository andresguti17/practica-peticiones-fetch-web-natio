import { urlPosts,
  fieldsPosts,
  posts } from "../const.js";

import { getAllData,
  createData,
  updateData,
  deleteData,
  getFindByIdData,
  loadUpdateData,
  modalAdd } from "../../../viewmodel/crud.js";

export async function getAllPosts() {
  getAllData(urlPosts, fieldsPosts, posts);
}

export async function createPost(event) {
  event.preventDefault()

  createData(urlPosts, event, fieldsPosts)
}

export async function updatePost(event) {
  updateData(urlPosts, event, fieldsPosts, posts)
}

export async function deletePost(id, event) {
  deleteData(id, urlPosts, event, fieldsPosts, posts)
}

export async function getFindByIdPost() {
  getFindByIdData(urlPosts, fieldsPosts, posts);
}

export async function loadUpdatePost(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsPosts)
}

export function modalAddPost() {
  modalAdd(fieldsPosts)
}