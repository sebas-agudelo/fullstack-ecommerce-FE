import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../../services/products/getProductsServices"
import { getProductById } from "../../services/products/getProductById";
import { getRecommendedProducts } from "../../services/products/getRecommendedProducts";

export const useGetProducts = (page, category_id, sub_category_id, searchQuery) => {
  return useQuery({
    queryKey: ["products", page, category_id, sub_category_id, searchQuery],
    queryFn: () => getProducts(page, category_id, sub_category_id, searchQuery),
    placeholderData: (prev) => prev,
    retry: 3,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false
  });
};

export const useGetProductById = (product_id) => {
  return useQuery({
    queryKey: ["product", product_id],
    queryFn: () => getProductById(product_id),
    retry: 3,
    retryDelay: 1000,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false
  })
};

export const useGetRecommendedProducts = (productId) => {
  return useQuery({
    // queryKey: ["product", product_id],
    queryFn: () => getRecommendedProducts(productId),
    retry: 3,
    retryDelay: 1000,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false
  })
};