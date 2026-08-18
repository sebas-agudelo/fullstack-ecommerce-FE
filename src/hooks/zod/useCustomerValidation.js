import { customerSchema } from "../../schemas/customer"

export const useCustomerValidation = (data) => {
    const validate = () => {
        const validation = customerSchema.safeParse(data)
        console.log("Safe parse data => ", data);
        if (!validation.success) {
            return validation.error.issues.reduce((acc, value) => {
                if (!acc[value.path[0]]) {
                    acc[value.path[0]] = value.message
                }
                return acc
            }, {});
        }
        return null
    }

    return { validate }
}