import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

const useLogin = ()=>{
    const {setAuthUser}= useAuthContext();

    const [loading, setLoading] = useState(false)

    const loginUser= async (username, password)=>{
        setLoading(true)
        try {
            const res= await fetch("/api/auth/login", {
                method: "POST",
                headers: { "content-type" : "application/json"},
                body: JSON.stringify({username, password})
            });
            const data=await res.json();
            
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("blogUser", JSON.stringify(data))

            setAuthUser(data)
            
        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }

    }
    return {loading, loginUser};
}

export default useLogin;