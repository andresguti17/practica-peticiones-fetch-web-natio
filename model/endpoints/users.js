import { urlUsers,
  fieldsUsers,
  users } from "../const.js";

import { getAllData,
  createData,
  updateData,
  deleteData,
  getFindByIdData,
  loadUpdateData,
  modalAdd } from "../../viewmodel/crud.js";

export async function getAllUsers() {
  getAllData(urlUsers, fieldsUsers, users);
}

export async function createUser(event) {
  event.preventDefault()

  createData(urlUsers, event, fieldsUsers)
}

export async function updateUser(event) {
  updateData(urlUsers, event, fieldsUsers, users)
}

export async function deleteUser(id, event) {
  deleteData(id, urlUsers, event, fieldsUsers, users)
}

export async function getFindByIdUser() {
  getFindByIdData(urlUsers, fieldsUsers, users);
}

export async function loadUpdateUser(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsUsers)
}

export function modalAddUser() {
  modalAdd(fieldsUsers)
}