import ButtonSpinner from '../../../../components/spinners/ButtonSpinner';
import { FormInput } from './FormInput';

export const CustomerDetailsForm = ({
    handleSubmit,
    setCustomerData,
    customerData,
    isPending,
    errors,
}) => {

    console.log("is pending: ", isPending);


    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col lg:flex-row lg:gap-4'>
                <FormInput
                    label="E-postadress"
                    name="email"
                    value={customerData?.email}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                    width="w-full lg:w-[50%]"
                    error={errors?.email || errors?.email}
                />

                <FormInput
                    label="Telefonnummer"
                    name="phone"
                    value={customerData?.phone}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                    width="w-full lg:w-[50%]"
                    error={errors?.phone}
                />
            </div>

            <FormInput
                label="För & efternamn"
                name="fullname"
                value={customerData?.fullname}
                onChange={(e) => setCustomerData(prev => ({ ...prev, fullname: e.target.value }))}
                error={errors?.fullname || errors?.fullname}

            />

            <FormInput
                label="Adress"
                name="address"
                value={customerData?.address}
                onChange={(e) => setCustomerData(prev => ({ ...prev, address: e.target.value }))}
                error={errors?.address}
            />

            <div className="md:flex md:space-x-4">
                <FormInput
                    label="Postnummer"
                    name="postal_code"
                    value={customerData?.postal_code}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, postal_code: e.target.value }))}
                    width="w-full md:w-[35%]"
                    error={errors?.postal_code}
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className="buttons buttons-bg"
            >
                {isPending ? <ButtonSpinner /> : "Fortsätt till betalning"}
            </button>

        </form>
    )
}