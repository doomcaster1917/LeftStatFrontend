import $api from "../api/axios";
import axios from 'axios';
import backendAddr from '../config/config'

export default class AuthService {
    static async login(name, password) {
        try{
            return await axios.post(`${backendAddr}/privacy`, {name: name, password: password}, {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            })
        } catch (error){throw error}
    }
}//