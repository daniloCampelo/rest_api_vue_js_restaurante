import axios from "axios";
import provedor from '../provedor'

const http = axios.create({
    baseURL: 'hhttp://localhost:8080/',
    headers: {
        'Accept': '*/*',
        'Content': 'aplication/json',
        
    }
})

http.interceptors.request.use(
    config => {
        const token = provedor.state.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, 
    error => {
        Promise.reject(error)
    }
)

export default http

