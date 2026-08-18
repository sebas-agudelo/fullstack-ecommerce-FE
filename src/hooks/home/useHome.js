import { useQuery } from "@tanstack/react-query"
import { getNewProducts, getPopularProducts } from "../../services/home/getNewProducts"

export const useGetPopularProducts = () => {
    return useQuery({
        queryKey: ["popular_products"],
        queryFn: getPopularProducts,
        retry: 3,
        retryDelay: 1000,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false
    })
}

export const useNews = () => {
    return useQuery({
        queryKey: ["news_products"],
        queryFn: getNewProducts,
        retry: 3,
        retryDelay: 1000,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false
    })
}