import { ProductViewSection } from "./ProductViewSection"
import { ProductBuySession } from "./ProductBuySession"
import { ProductInfoSection } from "./ProductInfoSection"
import ContentSpinner from "../../../../components/spinners/ContentSpinner";
import { ProductGalleryModal } from "./ProductGalleryModal";

export const ProductDetailsLayout = ({
    product,
    isModalOpen,
    setISModalOpen,
    currentImage,
    setCurrentImage,
    sections,
    setSections,
    isLoading
}) => {
    return (
        <div className="max-w-[1440px] m-auto bg-white">
            {isLoading ? (<ContentSpinner />) :
                <div className="max-w-[1280px] m-auto pt-4 lg:pt-8 pb-8">
                    <div className="h-full flex flex-col md:flex-row justify-center mb-6 xl:mb-10 px-4 lg:px-10">
                        <ProductViewSection
                            product={product}
                            isModalOpen={isModalOpen}
                            setISModalOpen={setISModalOpen}
                            setCurrentImage={setCurrentImage}
                            setSections={setSections}
                            currentImage={currentImage}
                        />

                        <ProductGalleryModal
                            product={product}
                            isModalOpen={isModalOpen}
                            setISModalOpen={setISModalOpen}
                            currentImage={currentImage}
                            setCurrentImage={setCurrentImage}
                        />

                        <ProductBuySession
                            product={product}
                            isModalOpen={isModalOpen}
                            setSections={setSections} />
                    </div>

                    <ProductInfoSection
                        sections={sections}
                        setSections={setSections}
                        product={product}
                    />
                </div>
            }
        </div>
    )
}