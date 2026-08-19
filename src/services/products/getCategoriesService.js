import { supabase_config } from "../../supabase_config/supabase_config"
const supabase = supabase_config();

export const getCategoriesService = async (category_id) => {
    let { data } = await supabase
        .from('categories_duplicate')
        .select('id, category')
    // .eq('id', category_id)

    return data
}   