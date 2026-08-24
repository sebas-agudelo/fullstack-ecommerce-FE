import { supabase_config } from "../../supabase_config/supabase_config"
const supabase = supabase_config();

export const getProductById = async (product_id) => {
    const { data, error } = await supabase
        .from('products_duplicate')
        .select(`*,
            product_images(
            img
            ),
            product_properties_values(
            property_id,
            value,
            products_properties(
                name
            )
            )
            `)
        .eq('id', product_id)
        .single();

    return { data, error };
};