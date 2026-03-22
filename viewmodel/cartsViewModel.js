import { urlCarts } from "../js/model/const.js";
    
import { getAllCarts,
    createCart,
    updateCart,
    deleteCart,
    getFindByIdCart,
    loadUpdateCart,
    modalAddCart } from "../js/model/endpoints/carts.js";

var idFilter = document.getElementById("idFilter")
idFilter.addEventListener("change", getFindByIdCart)

var getAll = document.getElementById("getAllCarts")
getAll.addEventListener("click", getAllCarts)

var modalAdd = document.getElementById("modalAddCart")
modalAdd.addEventListener("click", modalAddCart)

var create = document.getElementById("createCart")
create.addEventListener("submit", createCart)

var update = document.getElementById("updateCart")
update.addEventListener("submit", updateCart)

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    const button = event.target;

    if (!button.dataset.action) return;

    const { action, id, type } = button.dataset;

    if (action === "delete") {
        deleteCart(id, event);
    }

    if (action === "update") {
        loadUpdateCart(id, event, urlCarts);
    }
});