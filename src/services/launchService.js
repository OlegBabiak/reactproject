import {axiosServiceSx} from "./axiosService";
import {urls} from "../constants/urls";

const launchService = {
getAll: () =>axiosServiceSx(urls.launches.base)
}

export {
    launchService
}