import { supabase_config } from "../../supabase_config/supabase_config"
const supabase = supabase_config();

export const getProductById = async (product_id) => {
    const { data, error } = await supabase
        .from('products_duplicate')
        .select('*')
        .eq('id', product_id)
        .single();

    return { data, error };
};