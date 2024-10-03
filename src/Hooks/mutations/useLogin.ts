import { useMutation } from "@tanstack/react-query"
import { loginQuery } from "../../Api/methods/loginQueries"

export const useLogin = () =>{

    return useMutation({
        mutationFn: loginQuery,
        onSuccess: async (response) => {
            localStorage.setItem('token', response?.data?.token)
            localStorage.setItem('user', JSON.stringify(response?.data?.user))
        },
    }) 
}
