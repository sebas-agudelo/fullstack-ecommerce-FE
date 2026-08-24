import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../../../Context/useCartContext";
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { StripePaymentFormView } from "./StripePaymentFormView";

const StripePaymentFormLogic = ({ handlePagar, setErrors }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const { total_price } = useContext(CartContext);

  useEffect(() => {
    if (!elements) {
      return
    };

    const paymentElement = elements.getElement(PaymentElement);
    if (!paymentElement) return;

    paymentElement.on("change", (event) => {
      setIsFormComplete(event.complete);
    });

  }, [elements])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsSubmitting(true);
    await handlePagar()

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://fullstack-ecommerce-fe-kfwe.vercel.app/confirm",
      },
    });

    if (error) {
      setErrors(error?.message);
      setIsSubmitting(false);
      return
    }
  };

  return (
    <StripePaymentFormView
      PaymentElement={PaymentElement}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
      elements={elements}
      stripe={stripe}
      total_price={total_price}
      handlePagar={handlePagar}
      isFormComplete={isFormComplete}
    />
  );
}

export default StripePaymentFormLogic;