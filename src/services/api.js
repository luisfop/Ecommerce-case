import axios from 'axios';


const api = axios.create({
    baseURL: 'https://reqres.in/api'
});


export async function LoginRequest(email, password){
    const response = await api.post('/login', {email,password});

    const {data, status} = response;

    if(status !== 200){
        return {
            error: true,
            message: 'Error on login request'
        }
    }

    return {data, email};
}