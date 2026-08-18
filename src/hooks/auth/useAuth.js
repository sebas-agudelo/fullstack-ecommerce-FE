import { useMutation, useQuery } from "@tanstack/react-query";
import { session, signIn, SignOut } from '../../services/auth/authServices';

export const useSignIn = () => {
    return useMutation({
        mutationFn: ({ email, password }) => {
            return signIn({ email, password })
        }
    })
}

export const useSignOut = () => {
    return useMutation({
        mutationFn: () => {
            return SignOut()
        }
    })
}

export const useSession = () => {
    console.log("Entro a Sesion....... ")
    return useQuery({
        queryKey: ["session"],
        queryFn: session
    })
}
