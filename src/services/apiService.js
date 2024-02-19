import axios from "axios";
import {baseUrl} from "../constants/urls";

const apiService = axios.create({baseURL:baseUrl})

export {
    apiService
}