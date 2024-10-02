import { useMutation } from "@tanstack/react-query"
import { loginQuery } from "../../Api/methods/loginQueries"
import { useNavigate } from "react-router-dom"


export const useLogin = () =>{

    const navigate = useNavigate()

    return useMutation({
        mutationFn: loginQuery,
        onSuccess: async (response) => {
            localStorage.setItem('token', response?.data?.token)
            localStorage.setItem('user', JSON.stringify(response?.data?.user))
            console.log('This is response', response);
            navigate('/user_details')
        },
    }) 
}
