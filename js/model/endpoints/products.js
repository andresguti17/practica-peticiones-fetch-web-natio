import { urlProducts,
  fieldsProducts,
  products } from "../const.js";

import { getAllData,
  createData,
  updateData,
  deleteData,
  getFindByIdData,
  loadUpdateData,
  modalAdd } from "../../viewmodel/crud.js";

export async function getAllProducts() {
  getAllData(urlProducts, fieldsProducts, products);
}

export async function createProduct(event) {
  event.preventDefault()

  createData(urlProducts, event, fieldsProducts)
}

export async function updateProduct(event) {
  updateData(urlProducts, event, fieldsProducts, products)
}

export async function deleteProduct(id, event) {
  deleteData(id, urlProducts, event, fieldsProducts, products)
}

export async function getFindByIdProduct() {
  getFindByIdData(urlProducts, fieldsProducts, products);
}

export async function loadUpdateProduct(id, event, url) {
  event.preventDefault()

  loadUpdateData(id, url, fieldsProducts)
}

export function modalAddProduct() {
  modalAdd(fieldsProducts)
}