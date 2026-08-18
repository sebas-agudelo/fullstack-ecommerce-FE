import { useQuery } from '@tanstack/react-query';
import { getCategoriesService } from '../services/products/getCategoriesService';

export const useCategories = (category_id) => {
    return useQuery({
        queryKey: [category_id],
        queryFn: () => getCategoriesService(category_id)
    })   
}

export const useCategoriess = (category_id) => {
    return useQuery({
        queryKey: [category_id],
        queryFn: () => getCategoriesService(category_id)
    })   
}