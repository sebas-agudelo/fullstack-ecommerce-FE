import { Link, useParams } from "react-router-dom";
import { useGetProductById } from "../../../hooks/products/useProducts";


import { useState } from "react";
import {ProductDetailsLayout} from "./product_details/ProductDetailsLayout"

export const ProductDetails = () => {
    const { id } = useParams();

    const { data: product, isLoading } = useGetProductById(id);

    const [isModalOpen, setISModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(1)

    const [sections, setSections] = useState({
        description: false,
        specs: false
    })

    return (
        <>
            <ProductDetailsLayout
                product={product}
                isModalOpen={isModalOpen}
                setISModalOpen={setISModalOpen}
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                sections={sections}
                setSections={setSections}
                isLoading={isLoading}
            />
        </>
    )
}