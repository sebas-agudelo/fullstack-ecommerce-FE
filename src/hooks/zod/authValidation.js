import { authUserSchema } from "../../schemas/authUser";

export const useAuthValidation = (authData) => {
    const validate = () => {
        const validation = authUserSchema.safeParse(authData)
        console.log("Safe parse data => ", authData);
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