import { supabase_config } from "../../supabase_config/supabase_config"
import { pagination } from "../../utils/pagination";

const supabase = supabase_config();

export const getProducts = async (page, category_id, sub_category_id, searchQuery) => {
    const size = 8;

    const { startOffset, endOffset } = pagination(page, size);

    let query = supabase
        .from('products_duplicate')
        .select(
            `id, brand, title, price, category_name, category_id, sub_category_id, color, short_description, img, 
            product_properties_values:product_properties_values(
                value,
                products_properties(
                    name
                )
            )
            `,
            { count: 'exact' }
        )
        .limit(3, { foreignTable: 'product_properties_values' })
        .range(startOffset, endOffset);

    if (category_id) {
        query = query.eq('category_id', category_id);
    }

    if (sub_category_id) {
        query = query.eq('sub_category_id', sub_category_id);
    }

    if (searchQuery) {
        query = query.or(
            `title.ilike.%${searchQuery}%,short_description.ilike.%${searchQuery}%,brand.ilike.%${searchQuery}%`
        );
    }

    const { data, count, error } = await query;

    if (error) {
        throw new Error(error.message);
    }

    const totalPages = Math.ceil(count / size);

    return { data, totalPages };
};