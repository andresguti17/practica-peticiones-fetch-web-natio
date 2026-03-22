const urlBase="http://www.localhost:3000/";

export const urlProducts=urlBase+"products";
export const urlCarts=urlBase+"carts";
export const urlUsers=urlBase+"users";
export const urlPosts=urlBase+"posts";

export const get="GET";
export const post="POST";
export const put="PUT";
export const deletes="DELETE";

export const products="Product"
export const users="User"
export const carts="Cart"
export const posts="Post"

export const fieldsProducts = ["id", "title", "price"]
export const fieldsCartProducts = ["id", "title", "price"]
export const fieldsCarts = ["id", fieldsCartProducts]
export const fieldsUsers = ["id", "firstName", "lastName", "age", "phone", "email"]
export const fieldsPosts = ["id", "title", "body", "views"]