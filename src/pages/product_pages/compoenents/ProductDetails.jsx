import { useParams } from "react-router-dom";
import { useGetProductById } from "../../../hooks/products/useProducts";

export const ProductDetails = () => {
    const {id} = useParams();

    const {data: product} = useGetProductById(id);

    return (
        <div>
            <div>
                <img src={product?.data.img} alt="" />
            </div>
            <p>{product?.data.title}</p>
            <p>{product?.data.price}</p>
            <p>{product?.data.brand}</p>
        </div>
    )
}