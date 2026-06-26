import axios from "axios";

const api=axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials: true
})

// /register

export async function register(userName,userEmail,password) {
    const response=await axios.post("http://localhost:3000/api/auth/login",{
        userName,
        userEmail,
        password
    })
    return response.data
}

// /login
export async function login(userName,password) {
    const response=await api.post('/login',{
        userName,
        password
    })
    return response.data;
}

// /getUser
export async function getUser() {
    const response=await api.get('/getUser')
    return response.data
}

