import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_INTERNAL_API_PATH,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (data) => {
    let response;

    try {
        response = await api.post('/login', data)
    }
    catch (e) {
        return e;
    }

    return response;

}

export const register = async (data) => {

    let response;

    try {
        response = await api.post('/register', data)
    }
    catch (e) {
        return e;
    }

    return response;
}