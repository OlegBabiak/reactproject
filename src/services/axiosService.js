import axios from "axios";
import {baseUrl, baseUrlSpacex} from "../constants/urls";


let axiosService = axios.create({baseURL:baseUrl})
let axiosServiceSx = axios.create({baseURL:baseUrlSpacex})

export {
    axiosService,
    axiosServiceSx
}