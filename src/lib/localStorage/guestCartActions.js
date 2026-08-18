export const guestCartActions = () => {
    const updateGuestCart = (newQty, productData) => {
        console.log("Cart data: ",productData);
        
        try {
            const id = productData.id || productData.product_id;

            if (!newQty || !id) {
                alert(`${newQty} | ${id}`)
                return;
            };

            const saveCart = JSON.parse(localStorage.getItem('cart')) || [];
            const existing = saveCart.some(item => item?.product_id === id);

            if (existing) {
                const updated = saveCart.map((item) => {
                    if (item.product_id === id) {
                        const quantity = item.quantity + newQty;
                        return {
                            ...item,
                            quantity,
                            total_price: item.unit_price * quantity
                        };
                    }
                    return item
                }).filter(item => item.quantity > 0)

                localStorage.setItem('cart', JSON.stringify(updated))
                return updated
            }

            const guestProductData = {
                product_id: productData?.id,
                product_img: productData?.img,
                product_title: productData?.title,
                short_description: productData?.short_description,
                unit_price: productData?.price,
                total_price: productData?.price,
                quantity: 1
            }
            const created = [...saveCart, guestProductData]
            localStorage.setItem('cart', JSON.stringify(created));

            return created
        } catch (error) {
            throw error
        };
    };


    return {
        updateGuestCart
    };
};