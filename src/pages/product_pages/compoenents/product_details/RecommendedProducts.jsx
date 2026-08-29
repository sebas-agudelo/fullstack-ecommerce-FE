import { useParams } from "react-router-dom"
import { FeaturedProductsSlider } from "../../../../components/Carousels/FeaturedProductsSlider"
import { ProductCard } from "../../../../components/Products/ProductCard"
import { useGetRecommendedProducts } from "../../../../hooks/products/useProducts"
import ContentSpinner from "../../../../components/spinners/ContentSpinner"

export const RecommendedProducts = () => {
    const { id } = useParams()
    const { data: products, isLoading } = useGetRecommendedProducts(id)

    return (
        <div className="w-full px-4 lg:px-10">
            {isLoading ? (
                <ContentSpinner />
            ) : (
                <>
                    <h2 className="text-[27px] text-gray-950/80 font-extrabold pt-8 pb-4">Liknande produkter</h2>

                    {products?.data?.length > 0 ? (
                        <FeaturedProductsSlider>
                            {products?.data?.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </FeaturedProductsSlider>
                    ) : (
                        <p>Inga rekommendationer för just nu.</p>
                    )}
                </>
            )}
        </div>
    )
}