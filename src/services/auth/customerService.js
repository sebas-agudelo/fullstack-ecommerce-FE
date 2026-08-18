import apiFetch from "../apiFetch"

export const getCustomer = async () => {
    return await apiFetch(
        'api/customer',
        {
            method: "GET"
        }
    )
}