import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL

export const getAllProducts = async () => {
    return await axios.get("http://localhost:4000/api/Books/")
}
