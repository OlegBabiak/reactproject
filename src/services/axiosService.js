import axios from "axios";
import {baseURL} from "../constants/urls";
// забрати дані які були в fetch('https://jsonplaceholder.typicode.com/users')
// але використовуємо власне базову URL https://jsonplaceholder.typicode.com
// let axiosService = axios.create({baseURL:baseURL});
//якщо ключ та значення співпадають .create({baseURL:baseURL}) можна скоротити до .create({baseURL})  (можна записати лише ключ)
let axiosService = axios.create({baseURL});

export {
    axiosService
}