import axios from "axios"
import { getRequest } from "./serviceUtils"
const apiUrl = process.env.REACT_APP_API_URL

export const getAllProducts = async () => {
    return getRequest("http://localhost:4000/api/Books/")
}

export const getProductByBookId = async (id) => {
    return getRequest(`http://localhost:4000/api/Books/${id}`);
}
