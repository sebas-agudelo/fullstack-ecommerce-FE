import { useSession } from "../auth/useAuth";
import { useGuestUpdateCartItem, useAuthUpdateCartItem } from "./useCartQueries";

export const useUpdateCartItem = () => {
    const { data: session } = useSession();
    const { mutate: updateUserCart, error: userUpdateError } = useAuthUpdateCartItem();
    const {mutate: updateGuestCart, error: guestUpdateError} = useGuestUpdateCartItem();

    const updateCart = (qty, item) => {
        if (!session?.user) {
            updateGuestCart({ qty, item });
            if(guestUpdateError){
                console.log(guestUpdateError)
            }
        } else {
            updateUserCart({ product_id: item.product_id, quantity: qty });

            if(userUpdateError){
                console.log(userUpdateError?.msg)
            }
        }
    };

    return {
        update: updateCart
    };
};


