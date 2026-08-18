import { ProductCard } from "../../../components/Products/ProductCard";

export const ProductsList = ({data}) => {
    return (
        <div className="flex flex-col md:flex-row flex-wrap w-full px-4">
          {
            data?.data?.map((product) => (
              <div className="md:w-[calc(100%/3)] lg:w-[calc(100%/4)]">
                <ProductCard
                  key={product.id}
                  product={product}
                />
              </div>
            ))
          }
        </div>
    )
}