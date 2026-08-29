import { useState } from "react";
import { useParams } from "react-router-dom";

import { Footer } from "../../components/Footer/Footer";
import { ProductDetailsLayout } from "./compoenents/product_details/ProductDetailsLayout";

import { useGetProductById } from "../../hooks/products/useProducts";

export default function GetProduct() {
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
      <Footer />
    </>
  );
}
