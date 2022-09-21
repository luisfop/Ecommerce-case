import { api } from '../services/api';

export async function LoginRequest(email, password){
    try{

        const request = await api.post("/login", {email, password});

        return request.data

    }catch(err){
        console.log('Error on LoginRequest ./util.js')
        return null
    }
}