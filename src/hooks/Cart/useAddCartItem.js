import { useSession } from "../auth/useAuth"
import { useGuestAddCartIem, useAuthAddCartItem } from "./useCartQueries"

export const useAddCartItem = () => {
    const { data: session } = useSession()
    const { mutate: authAddCartItem } = useAuthAddCartItem();
    const { mutate: guestAddCartIem } = useGuestAddCartIem();

    const addToCart = (qty, product) => {
        if (!session?.user) {
            guestAddCartIem({ qty, product });

        } else {
            authAddCartItem(product?.id, qty)
        }
    }
    return { add: addToCart }
}