import { useState, useEffect } from "react"

import { useCreateGuest } from "../../../../hooks/checkout/useCheckout"
import { useCustomerValidation } from "../../../../hooks/zod/useCustomerValidation"
import { CustomerDetailsSection } from "./CustomerDetailsSection"

export const CustomerDetailsStep = ({
    customerData,
    setCustomerData,
    costumer,
    refetch,
    setErrors
}) => {
    const [clientErrors, setClientErrors] = useState(null);
    const { validate } = useCustomerValidation(customerData);
    const { mutate, isPending, error } = useCreateGuest();

    useEffect(() => {
        if (costumer) {
            setCustomerData(costumer)
        }
    }, [costumer, setCustomerData])

    const fieldErrors = {
        ...error?.msg,
        ...clientErrors
    }

    const clearFieldError = (mmm, value) => {
        console.log("Name: ",value);
        
        if (value?.length > 0) {
            setClientErrors(prev => ({
                ...prev,
                [mmm]: null
            }))
        }

        if (value.length <= 0) {
            const errors = validate()
            if (errors) {
                setClientErrors(prev => ({
                    ...prev,
                    [mmm]: errors[mmm]
                }))
                return
            };
        }

        console.log("error: ",value);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClientErrors();
        setErrors()

        const errors = validate()
        if (errors) {
            setClientErrors(errors)
            return
        };

        mutate(customerData, {
            onSuccess: () => {
                refetch()
            },

            onError: (error) => {
                if (error?.type !== "VALIDATION") {
                    setErrors(error?.msg)
                }
            }
        });
    }

    return (
        <CustomerDetailsSection
            handleSubmit={handleSubmit}
            customerData={customerData}
            setCustomerData={setCustomerData}
            isPending={isPending}
            errors={fieldErrors}
            costumer={costumer}
            clearFieldError={clearFieldError}
        />
    )
}