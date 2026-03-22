import { urlUsers } from "../js/model/const.js";
    
import { getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getFindByIdUser,
    loadUpdateUser,
    modalAddUser } from "../js/model/endpoints/users.js";

var idFilter = document.getElementById("idFilter")
idFilter.addEventListener("change", getFindByIdUser)

var getAll = document.getElementById("getAllUsers")
getAll.addEventListener("click", getAllUsers)

var modalAdd = document.getElementById("modalAddUser")
modalAdd.addEventListener("click", modalAddUser)

var create = document.getElementById("createUser")
create.addEventListener("submit", createUser)

var update = document.getElementById("updateUser")
update.addEventListener("submit", updateUser)

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    const button = event.target;

    if (!button.dataset.action) return;

    const { action, id, type } = button.dataset;

    if (action === "delete") {
        deleteUser(id, event);
    }

    if (action === "update") {
        loadUpdateUser(id, event, urlUsers);
    }
});