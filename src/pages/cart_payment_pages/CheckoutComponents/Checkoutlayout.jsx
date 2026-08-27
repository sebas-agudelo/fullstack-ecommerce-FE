import { useState } from "react"

import { CheckoutHeader } from "./CheckoutHeader"
import { CheckoutOrderSummary } from "./CheckoutOrderSummary"
import { CartSummary } from "../CartComponents/CartSummary"
import { CustomerDetailsStep } from "../CheckoutComponents/CustomerSteps/CustomerDetailsStep"
import { StripePaymentStep } from "../CheckoutComponents/StripeSteps/StripePaymentStep"
import { MainErrors } from "../../../components/MainErrors";
import ContentSpinner from "../../../components/spinners/ContentSpinner"

export const CheckoutLayout = ({ customerData, setCustomerData, costumer, refetch, setErrors, errors, isLoading }) => {
    const [isOrderSummaryOpen, setIsOrderSummaryOpen] = useState(false)

    return (
        <div className="max-w-5xl m-auto pt-6 px-4 relative bg-white">
            <CheckoutHeader />

            <MainErrors errors={errors} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-14 items-start">
                <div className={`w-full lg:col-span-8 rounded-lg shadow-md bg-gray-50 mb-10`}>
                    <CheckoutOrderSummary isOrderSummaryOpen={isOrderSummaryOpen} setIsOrderSummaryOpen={setIsOrderSummaryOpen} />
                </div>

                <div className={`${!isOrderSummaryOpen && "hidden lg:block"} lg:h-screen lg:col-span-4 lg:row-span-3 lg:sticky lg:top-0 lg:self-start`}>
                    <CartSummary />
                </div>

                <div className="lg:col-span-8 mb-10">
                    {isLoading ? (
                        <ContentSpinner />
                    ) : (
                        <CustomerDetailsStep
                            customerData={customerData}
                            setCustomerData={setCustomerData}
                            costumer={costumer}
                            refetch={refetch}
                            setErrors={setErrors}
                        />
                    )}
                </div>

                <div className="lg:col-span-8 pb-6">
                    <StripePaymentStep
                        costumer={costumer}
                        setErrors={setErrors}
                    />
                </div>
            </div>

        </div>
    )
}