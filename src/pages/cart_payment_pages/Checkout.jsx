import { useEffect, useState } from "react"

import { CheckoutLayout } from "./CheckoutComponents/Checkoutlayout"
import { useGetCustomer } from "../../hooks/auth/useCustomer"

export const CheckoutPage = () => {
    const { data: costumer, error, refetch } = useGetCustomer()

    const [errors, setErrors] = useState(null)
    const [customerData, setCustomerData] = useState({
        email: "",
        fullname: "",
        phone: "",
        address: "",
        postal_code: ""
    })

    useEffect(() => {
        if (error) {
            setErrors(error.msg)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [errors])


    return (
            <CheckoutLayout
                customerData={customerData}
                setCustomerData={setCustomerData}
                costumer={costumer}
                refetch={refetch}
                setErrors={setErrors}
                errors={errors}
            />
    )
}