import { getRequest } from "./serviceUtils"
const apiUrl = "http://localhost:4000/api"

export const getAllPosts = async () => {
    return getRequest(`${apiUrl}/Beer/`)
}

export const getPostByID = async (id) => {
    return getRequest(`${apiUrl}/Beer/id/${id}`);
}

export const getPostsFromQuery = async (jsonQuery) => {
    return getRequest(`${apiUrl}/Beer/query/${jsonQuery}`)
}

export const getRecentPosts = async () => {
    return getRequest(`${apiUrl}/Beer/recent`)
}

export const getPostsPage = async (page) => {
    console.log(page);
    return getRequest(`${apiUrl}/Beer/recent/${page}`)
}
