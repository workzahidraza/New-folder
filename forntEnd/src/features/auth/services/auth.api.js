import axios from "axios";

const api=axios.create({
    baseURL="http://localhost/api/auth",
    withCredentials: true
})

// /register

export async function register(userName,userEmail,userPassword) {
    const response=await api.post("/register",{
        userName,
        userEmail,
        userPassword
    })
    return response.data
}

// /login
export async function login(userName,userPassword) {
    const response=await api.post('/login',{
        userName,
        userPassword
    })
    return response.data;
}

// /getUser
export async function getUser() {
    const response=await api.get('/getUser')
    return response.data
}

