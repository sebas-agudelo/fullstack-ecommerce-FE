import { CustomerDetailsForm } from "./CustomerDetailsForm"

import { FiCheckCircle } from "react-icons/fi";

export const CustomerDetailsSection = ({ handleSubmit, customerData, setCustomerData, isPending, errors, costumer }) => {
    return (
        <div className="lg:w-full mb-0 lg:mb-0">
            <div className="mb-2">
                <h3 className="font-bold">Dina uppgifter</h3>
            </div>

            {costumer ?
                <div className="flex border border-purple-900 border-[2px] rounded-md shadow-md py-6 gap-4 lg:gap-0 px-4 lg:px-0">
                    <div className="w-[12%] flex justify-center items-center">
                        <FiCheckCircle className="text-green-600 text-4xl" />
                    </div>

                    <div className="text-[14.5px]">
                        <p>E-postadress: {costumer?.email}</p>
                        <p>Telefonnummer: {costumer?.phone}</p>
                    </div>
                </div>

                :

                <div className="border border-gray-300 rounded-md shadow-md px-4 lg:px-6 pt-4 pb-8">
                    <CustomerDetailsForm
                        handleSubmit={handleSubmit}
                        customerData={customerData}
                        setCustomerData={setCustomerData}
                        isPending={isPending}
                        errors={errors}
                    />
                </div>
            }
        </div>
    )
}