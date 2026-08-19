import { useContext } from "react";
import ContentSpinner from "../../../components/spinners/ContentSpinner";
import { CartItemSection } from "./CartItemSection";
import { CartSummary } from "./CartSummary";
import { CartContext } from "../../../Context/useCartContext";

export const CartLayout = () => {
    const { cart, userLoading, guestLoading } = useContext(CartContext);

    return (
        <main className="max-w-5xl m-auto h-[calc(100dvh_-_78px)] md:h-[calc(100dvh_-_118px)] lg:h-[calc(100dvh_-_135px)] lg:px-6">
            {(userLoading || guestLoading) && (
                <div className="w-full text-center">
                    <ContentSpinner />
                </div>
            )}

            {cart && cart.length === 0 ?
                <div className="w-full text-center">
                    <p className="text-xl font-semibold mb-2">Din varukorg är tom.</p>
                    <p className="px-8">Logga in för att spara eller komma åt redan sparade artiklar i din varukorg.</p>
                </div>
                :
                <div className="w-full flex flex-col h-full relative lg:flex-row">
                    <CartItemSection />
                    <CartSummary />
                </div>
            }
        </main>
    )
}