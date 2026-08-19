import { FeaturedProductsSlider } from "../../components/Carousels/FeaturedProductsSlider";
import { useGetPopularProducts } from "../../hooks/home/useHome";
import { ProductCard } from "../../components/Products/ProductCard";
import { MainErrors } from "../../components/MainErrors";
import ContentSpinner from "../../components/spinners/ContentSpinner"

export const PopularProducts = () => {
    const { data: products, isLoading, error } = useGetPopularProducts();
    return (
        <div className="h-auto px-4 lg:px-4 mb-8">
            <h2 className="text-[22px] text-gray-800 pt-6 pb-3 lg:pt-10 lg:pb-3 lg:pl-2 font-extrabold">POPULÄRT JUST NU</h2>
            {!isLoading && error && (<MainErrors errors={error?.message} />)}

            {isLoading && <ContentSpinner />}

            <FeaturedProductsSlider>
                {products?.map(product => (
                    <ProductCard product={product} />
                ))}
            </FeaturedProductsSlider>
        </div>
    )
} 