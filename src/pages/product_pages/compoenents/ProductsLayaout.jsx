import { ProductsList } from "./ProductsList"
import { Pagination } from "./Pagination"
import { Footer } from "../../../components/Footer/Footer"
import ContentSpinner from "../../../components/spinners/ContentSpinner"

export const ProductsLayout = ({ data, page, urlPage, handlePageChange, pages, isLoading, isError, error }) => {
    return (
        <>
            <main className="max-w-[1440px] m-auto pb-8 bg-white">
                {isLoading && !isError && (<ContentSpinner />)}

                <ProductsList data={data} />

                {data?.totalPages > 0 && (
                    <Pagination
                        page={page}
                        urlPage={urlPage}
                        handlePageChange={handlePageChange}
                        pages={pages}
                    />
                )
                }

                {data?.totalPages === 0 && !isLoading && (
                    <div className="text-center">
                        <p>Det finns inga produkter att visa just nu.</p>
                    </div>
                )}
            </main>

            <Footer />
        </>
    )
}