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

export const logout = async () => {

    let response;

    try {
        response = await api.post('/logout')
    }
    catch (e) {
        return e;
    }

    return response;
}

export const getAllBlogs = async () => {
    let response;

    try{
        response = await api.get('/blog/all')
    }
    catch(e){
    }

    return response;
}

export const submitBlog = async (data) => {
    let response;

    try{
        response = await api.post('/blog', data)
    }
    catch(e){
        return e;
    }

    return response;
}