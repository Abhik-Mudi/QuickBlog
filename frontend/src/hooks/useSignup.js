import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

const isProduction = import.meta.env.IS_PRODUCTION;
const API_URL = isProduction ? import.meta.env.VITE_API_URL : 'localhost:5000';

const useSignup = () => {
    const {setAuthUser} = useAuthContext();
    
    const [loading, setLoading] = useState(false);

    const signupUser = async (username, email, password)=>{
        setLoading(true);
        try{
            const res=await fetch(`${API_URL}/api/auth/signup`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({username, email, password})
            });
            const data=await res.json();
            
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("blogUser", JSON.stringify(data));

            setAuthUser(data);
        } catch (error){
            toast.error(error.message);
        } finally{
            setLoading(false)
        }
    }

    return {loading, signupUser};
}

export default useSignup
