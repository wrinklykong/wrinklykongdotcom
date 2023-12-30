import axios from "axios"
const apiUrl = process.env.REACT_APP_API_URL

export const getRequest = async (url) => {
    try {
        return await axios.get(url)
    } catch (e) {
        console.log(e);
    }
}