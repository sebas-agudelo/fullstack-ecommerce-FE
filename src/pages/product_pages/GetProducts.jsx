import { useLocation, useParams } from "react-router-dom";
import { useEffect } from 'react'

import { useGetProducts } from "../../hooks/products/useProducts";
import { usePagination } from "../../hooks/usePagination";

import { ProductsLayout } from "./compoenents/ProductsLayaout";


export default function GetProducts() {
  const { type, id } = useParams();
  const location = useLocation();

  const params = new URLSearchParams(location.search)
  const searchQuery = params.get('search') || ""

  const categoryId = type === "category" ? id : null;
  const subCategoryId = type === "sub" ? id : null;

  const { page, urlPage, handlePageChange } = usePagination();

  const { data = { data: [], totalPages: 0 },
    isLoading,
    isError
  } = useGetProducts(page, categoryId, subCategoryId, searchQuery);

  const pages = [];
  const totalPages = data?.totalPages || 0;
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <ProductsLayout
      data={data}
      page={page}
      urlPage={urlPage}
      handlePageChange={handlePageChange}
      pages={pages}
      isLoading={isLoading}
      isError={isError}
    />
  );
}

