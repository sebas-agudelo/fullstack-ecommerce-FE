import apiFetch from "../apiFetch"

export const getAuthCart = async () => {
    return await apiFetch('api/cart', {
        method: "GET"
    })
}

export const authAddCartItem = async ({product_id, quantity}) => {
    return await apiFetch('api/cart/items', {
        method: "POST",
        body: JSON.stringify({product_id, quantity})
    })
}

export const authUpdateCartItem = async ({product_id, quantity}) => {    
    return await apiFetch('api/cart/qty', {
        method: "PUT",
        body: JSON.stringify({product_id, quantity})
    })
}