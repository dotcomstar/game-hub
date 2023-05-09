import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '9c04d5f866334157a3533eca86a06bb8'
    }
})