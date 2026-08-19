import { useEffect, useState, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useInitializePayment } from "../../../../hooks/checkout/useCheckout";
import { useCreateCostumerOrder } from "../../../../hooks/checkout/useCheckout";
import { CartContext } from "../../../../Context/useCartContext";
import { StripePaymentSection } from "./StripePaymentSection";

export const StripePaymentStep = ({
    costumer, setErrors
}) => {
    const { mutate: initializePayment } = useInitializePayment();
    const { mutate: createCustomerOrder } = useCreateCostumerOrder();

    const { cart } = useContext(CartContext);

    const stripePromise = loadStripe(process.env.REACT_APP_PUBLIC_STRIPE_KEY);

    const [clientSecret, setClientSecret] = useState()
    const [paymentId, setPaymentId] = useState();
    const [customerId, setCustomerId] = useState();

    useEffect(() => {
        if (costumer?.email &&
            costumer?.fullname &&
            costumer?.phone
        ) {
            initializePayment({ customerData: costumer }, {
                onSuccess: (data) => {
                    setClientSecret(data?.clientSecret)
                    setPaymentId(data?.payment_id)
                    setCustomerId(data?.customer_id)
                    setErrors(null)
                },
                onError: (error) => {
                    setErrors(error?.msg)
                }
            })
        }
    }, [costumer, cart, initializePayment, setErrors])

    console.log("cliente secret: ",clientSecret);
    console.log("Payment id: ",paymentId);
    
    

    const handlePagar = async () => {
        setErrors(null)

        createCustomerOrder({
            items: cart,
            payment_id: paymentId,
            customer_id: customerId
        }, {
            onError: (error) => {
                setErrors(error?.msg)
            }
        })

    }

    const appearance = {
        theme: "stripe",
    };

    const options = {
        clientSecret,
        appearance,
    };

    return (
        <StripePaymentSection
            clientSecret={clientSecret}
            options={options}
            stripePromise={stripePromise}
            handlePagar={handlePagar}
            Elements={Elements}
            setErrors={setErrors}
        />
    )
}