import React, { createContext, useState } from "react";

export const AuthContext = createContext({});



export const AuthProvider = ({children}) => {

    const [ user, setUser] = useState({})


    let authenticate = async (email, password){}

}
