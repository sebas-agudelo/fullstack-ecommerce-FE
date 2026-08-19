import StripePaymentFormLogic from "./StripePaymentFormLogic"

export const StripePaymentSection = ({ clientSecret, options, stripePromise, handlePagar, Elements, setErrors }) => {
    return (
        <div className="">
            <h3 className="font-bold mb-2">Betalning</h3>
            {clientSecret ? (
                <div>
                    <Elements key={clientSecret} options={options} stripe={stripePromise}>
                        <StripePaymentFormLogic handlePagar={handlePagar} setErrors={setErrors} />
                    </Elements>
                </div>

            ) : (

                <div className="text-[14.5px] border border-[2px] border-purple-900 rounded-md py-6 px-4 shadow-lg"><p>Betalningsalternativ visas när alla e obligatoriska stegen ovan är slutförda.</p></div>
            )}
        </div>
    )
}