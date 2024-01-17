import axios from "axios"

export const getRequest = async (url) => {
    try {
        const data = await axios.get(url)
        return data
    } catch (error) {
        return null;
    }
}