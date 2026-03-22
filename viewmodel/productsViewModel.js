import { urlProducts } from "../model/const.js";
    
import { getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    getFindByIdProduct,
    loadUpdateProduct,
    modalAddProduct } from "../model/endpoints/products.js";

var idFilter = document.getElementById("idFilter")
idFilter.addEventListener("change", getFindByIdProduct)

var getAll = document.getElementById("getAllProducts")
getAll.addEventListener("click", getAllProducts)

var modalAdd = document.getElementById("modalAddProduct")
modalAdd.addEventListener("click", modalAddProduct)

var create = document.getElementById("createProduct")
create.addEventListener("submit", createProduct)

var update = document.getElementById("updateProduct")
update.addEventListener("submit", updateProduct)

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    const button = event.target;

    if (!button.dataset.action) return;

    const { action, id, type } = button.dataset;

    if (action === "delete") {
        deleteProduct(id, event);
    }

    if (action === "update") {
        loadUpdateProduct(id, event, urlProducts);
    }
});