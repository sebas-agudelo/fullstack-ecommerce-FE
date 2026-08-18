import { createContext } from "react";
import { useSession } from "../hooks/auth/useAuth";
import { useGuestCart, useUserCart } from "../hooks/Cart/useCartQueries";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { data: userCart, isLoading: userLoading } = useUserCart()
    const { data: guestCart, isLoading: guestLoading } = useGuestCart()
    const { data: session } = useSession()

    const authUser = session?.user;

    const total_price = authUser
        ? userCart?.total_price
        : guestCart?.reduce((acc, item) => acc + item.total_price, 0);

    const items = authUser
        ? userCart?.items
        : guestCart?.reduce((acc, item) => acc + item.quantity, 0);

    const tax = authUser ?
        userCart?.tax
        : guestCart?.reduce((acc, item) => acc + item.total_price * 0.25, 0);

    return (
        <CartContext.Provider value={{
            cart: authUser ? userCart?.data : guestCart,
            items,
            total_price,
            tax,
            userLoading,
            guestLoading
        }}>
            {children}
        </CartContext.Provider>
    )
}