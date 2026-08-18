import apiFetch from "../apiFetch";

export const createGuest = async (customerData) => {
    return await apiFetch(
        'api/checkout/guest', {
        method: "POST",
        body: JSON.stringify(customerData)
    })
};

export const createCustomerOrder = async ({ items, payment_id, customer_id }) => {
    console.log("Costumer order items", items)
    return await apiFetch(
        'api/checkout/create-order', {
        method: "POST",
        body: JSON.stringify({ items, payment_id, customer_id })
    })
};

export const initializePayment = async (paymentDetails) => {
    return await apiFetch(
        'api/checkout/payment', {
        method: "POST",
        body: JSON.stringify(paymentDetails)
    })
};

export const getPaymentStatus = async (payment_intent) => {
    return await apiFetch(
        `api/payment/status/${payment_intent}`, {
        method: "GET"
    }
    )
}

export const getOrderDetails = async (order_number) => {
    return await apiFetch(
        `api/checkout/order/${order_number}`, {
        method: "GET"
    }
    )
}
