import { urlPosts } from "../js/model/const.js";
    
import { getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getFindByIdPost,
    loadUpdatePost,
    modalAddPost } from "../js/model/endpoints/posts.js";

var idFilter = document.getElementById("idFilter")
idFilter.addEventListener("change", getFindByIdPost)

var getAll = document.getElementById("getAllPosts")
getAll.addEventListener("click", getAllPosts)

var modalAdd = document.getElementById("modalAddPost")
modalAdd.addEventListener("click", modalAddPost)

var create = document.getElementById("createPost")
create.addEventListener("submit", createPost)

var update = document.getElementById("updatePost")
update.addEventListener("submit", updatePost)

const container = document.getElementById("container");

container.addEventListener("click", (event) => {
    const button = event.target;

    if (!button.dataset.action) return;

    const { action, id, type } = button.dataset;

    if (action === "delete") {
        deletePost(id, event);
    }

    if (action === "update") {
        loadUpdatePost(id, event, urlPosts);
    }
});