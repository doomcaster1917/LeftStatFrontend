import backendAddr from '/config/config'
import axios from 'axios';

const $api = axios.create({
    baseURL: backendAddr,
    withCredentials: true,
    timeout:5000
});

$api.interceptors.request.use((config) => {
        config.headers["Content-Type"] = 'application/x-www-form-urlencoded'
        config.headers.Authorization = `${localStorage.getItem('authorization')}`
        return config
})

export default $api