import { useQuery } from "@tanstack/react-query"
import { getCustomer } from "../../services/auth/customerService"

export const useGetCustomer = () => {
    return useQuery({
        queryKey: ["customer"],
        queryFn: () => getCustomer(),
        staleTime: 0,
        gcTime: 1000 * 60 * 5,
        retry: 3,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false
    })
} 