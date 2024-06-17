import { createContext, useContext, useEffect, useState } from "react"
import {toast} from 'react-hot-toast'
const AuthContext=createContext();
const useAuthContext=()=>{return useContext(AuthContext)}
function AuthContextProvider({children})
{
    const[authUser,SetauthUser]=useState(null);
    const[loading,Setloading]=useState(true);
    useEffect(()=>{
        const checkuserlogin=async()=>{
        Setloading(true)
        try{
            const user=await fetch("/api/auth/check",{credential:"include"})
            const data=await user.json();
            SetauthUser(data.user);
        }
        catch(error)
        {
           toast.error(error.message);
        }
        finally{
         Setloading(false)
        }
    }
    checkuserlogin();
},[])
    return<AuthContext.Provider value={{authUser,SetauthUser,loading}}>{children}</AuthContext.Provider>
}

export {useAuthContext,AuthContextProvider}