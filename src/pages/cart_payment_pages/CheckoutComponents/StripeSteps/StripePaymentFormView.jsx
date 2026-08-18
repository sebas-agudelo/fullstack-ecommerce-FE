import ButtonSpinner from "../../../../components/spinners/ButtonSpinner";
import { formatPrice } from "../../../../utils/formatPrice";
import { FaRegCreditCard } from "react-icons/fa";

export const StripePaymentFormView = ({ PaymentElement, handleSubmit, isSubmitting, elements, stripe, total_price, handlePagar, isFormComplete }) => {
    console.log("Is submiting: ", isSubmitting);

    return (
        <div className="border border-gray-300 rounded-md px-4 py-6 shadow-md">
            <div className="mb-6">
                <h3 className="font-bold text-[14px] mb-1 flex items-center gap-1"> <FaRegCreditCard /> Kortbetalning</h3>
                <p className="text-[12px]">Mastercard, Visa, American Express</p>
            </div>
            <form onSubmit={handleSubmit} className="lg:px-8">
                <PaymentElement
                    id="payment-element"
                    options={{
                        wallets: {
                            link: 'never'
                        },
                        link: {
                            disabled: true
                        }
                    }}
                />

                <button
                    disabled={isFormComplete === false || !stripe || !elements} id="submit"
                    className={`buttons mt-6 ${isFormComplete ? "bg-purple-950" : "bg-gray-400"}`}
                >
                    {isSubmitting ? <ButtonSpinner /> : <div> Slutför order på <span className="text-[21px]">{formatPrice(total_price)} kr</span></div>}
                </button>
            </form>
            <p className="mt-2 text-[12px] text-center">Genom att klicka på <span className="font-semibold">'Slutför order'</span> godkänner du våra köpvillkor och vår integritetspolicy.</p>
        </div>
    )
}