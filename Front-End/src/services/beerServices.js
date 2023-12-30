import axios from "axios"
import { getRequest } from "./serviceUtils"
const apiUrl = process.env.REACT_APP_API_URL

export const getAllPosts = async () => {
    return getRequest("http://localhost:4000/api/Beer/")
}

export const getPostByID = async (id) => {
    return getRequest(`http://localhost:4000/api/Beer/id/${id}`);
}

export const getPostsFromQuery = async (jsonQuery) => {
    return getRequest(`http://localhost:4000/api/Beer/query/${jsonQuery}`)
}

export const getRecentPosts = async () => {
    return getRequest(`http://localhost:4000/api/Beer/recent`)
}

export const getPostsPage = async (page) => {
    console.log(page);
    return getRequest(`http://localhost:4000/api/Beer/recent/${page}`)
}
