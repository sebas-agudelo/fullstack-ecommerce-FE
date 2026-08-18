const apiFetch = async (path, options = {}) => {
    const BASE_URL = 'https://fullstack-ecommerce-be.onrender.com';
    try {
        const response = await fetch(`${BASE_URL}/${path}`, {
            method: options.method || "GET",
            credentials: "include",
            headers: {
                "Content-type": "application/json",
                ...(options.headers || {})
            },
            body: options.body
        })

        const data = await response.json();

        console.log("apifetch: ",data)

        if (!response.ok) {
            // const error = new Error(data?.msg || "Cart error");
            // data.status = response.status;

            console.log("Api Fetch Error: ",data)
            
            throw data
            
            
        }

        return data;

    } catch (error) {
        console.log("API FETCH: ", error);
        throw error;
    }
}

export default apiFetch;