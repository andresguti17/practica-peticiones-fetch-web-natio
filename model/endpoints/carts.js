import { urlCarts,
  fieldsCarts, 
  carts} from "../const.js";

import { getAllData,
  createData,
  updateData,
  deleteData,
  getFindByIdData,
  loadUpdateData,
  modalAdd } from "../../../viewmodel/crud.js";

export async function getAllCarts() {
  getAllData(urlCarts, fieldsCarts, carts);
}

export async function createCart(event) {
  event.preventDefault()

  createData(urlCarts, event, fieldsCarts)
}

export async function updateCart(event) {
  updateData(urlCarts, event, fieldsCarts, carts)
}

export async function deleteCart(id, event) {
  deleteData(id, urlCarts, event, fieldsCarts, carts)
}

export async function getFindByIdCart() {
  getFindByIdData(urlCarts, fieldsCarts, carts);
}

export async function loadUpdateCart(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsCarts)
}

export function modalAddCart() {
  modalAdd(fieldsCarts)
}