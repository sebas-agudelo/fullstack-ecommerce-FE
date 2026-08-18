import { getCustomerData, initializePayment, createGuest, getPaymentStatus, createCustomerOrder, orderDetailsblabla } from "../../services/checkout/checkoutServices";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useUserCart } from "../Cart/useCartQueries";
import { useContext } from "react";
import { CartContext } from "../../Context/useCartContext";

export const useCreateGuest = () => {
    const mutation = useMutation({
        mutationFn: (customerData) => {
            const payload = {
                ...customerData
            };
            return createGuest(payload)
        }
    });
    return mutation;
};

export const useCreateCostumerOrder = () => {
    const mutation = useMutation({
        mutationFn: ({ items, payment_id, customer_id }) => {
            return createCustomerOrder({ items, payment_id, customer_id })
        }
    });

    return mutation;
};


export const useInitializePayment = () => {
    const { cart } = useContext(CartContext);

    const mutation = useMutation({
        mutationFn: (orderData) => {
            const payload = {
                email: orderData.customerData.email,
                fullname: orderData.customerData.fullname,
                phone: orderData.customerData.phone,
                items: cart
            };

            return initializePayment(payload)
        }
    });

    return mutation;
};

export const useGetPaymentStatus = (payment_intent) => {
    return useQuery({
        queryKey: ['payment_status'],
        queryFn: () => getPaymentStatus(payment_intent),
        retry: 3,
        retryDelay: 1000,
        staleTime: 0,
        gcTime: 0,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,

    })
}

export const useGetOrderDetails = (order_number) => {
    return useQuery({
        queryFn: () => getOrderDetails(order_number)
    }
    )
}
