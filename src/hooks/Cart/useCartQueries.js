import { authAddCartItem , getAuthCart, authUpdateCartItem } from "../../services/cart/cartServices"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useSession } from "../auth/useAuth"
import { guestCartActions } from "../../lib/localStorage/guestCartActions";

export const useUserCart = () => {
    const { data: session } = useSession()
    return useQuery({
        queryKey: ['cart'],
        queryFn: getAuthCart,
        placeholderData: (prev) => prev,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 15,
        retry: 3,
        retryDelay: 1000,
        refetchOnWindowFocus: true,
        refetchOnReconnect: true,
        enabled: !!session?.user
    })
};

export const useGuestCart = () => {
    return useQuery({
        queryKey: ['guestCart'],
        queryFn: () => {
            const savedGuestCart = JSON.parse(localStorage.getItem('cart')) || [];
            return savedGuestCart;
        }
    })
};

export const useAuthAddCartItem = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (product_id) => {
            return authAddCartItem ({ product_id: product_id, quantity: 1 })
        }, onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })

        }, onError: (error) => {

        }
    })
};

export const useGuestAddCartIem = () => {
    const queryClient = useQueryClient();
    const { updateGuestCart } = guestCartActions();

    return useMutation({
        mutationFn: ({qty, product}) => {
            return updateGuestCart(qty, product)

        }, onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['guestCart'] })

        }, onError: (error) => {

        }
    })
};

export const useAuthUpdateCartItem = () => {
    const clientQuery = useQueryClient();
    return useMutation({
        mutationFn: ({ product_id, quantity }) => {
            return authUpdateCartItem({ product_id, quantity })
        },

        onSuccess: (data) => {
            clientQuery.invalidateQueries({ queryKey: ['cart'] })

        }, onError: (error) => {
            //    alert(error?.message)
        }
    })
};

export const useGuestUpdateCartItem = () => {
    const clientQuery = useQueryClient();
    const { updateGuestCart } = guestCartActions();

    return useMutation({
        mutationFn: ({ qty, item }) => {
            console.log("Guest cart update: ", qty, item);
            return updateGuestCart(qty, item )
        },

        onSuccess: (data) => {
            clientQuery.invalidateQueries({ queryKey: ['guestCart'] })

        }, onError: (error) => {
            //    alert(error?.message)
        }
    })
};

