import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"

const baseURL = "http://172.28.208.1:8000";
const api = axios.create({
    baseURL: baseURL})

api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) =>{
        return Promise.reject(error);
    }
);
export default api;

