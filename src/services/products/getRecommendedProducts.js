import { supabase_config } from "../../supabase_config/supabase_config"
const supabase = supabase_config();

export const getRecommendedProducts = async (productId) => {

    console.log("Hola");
    
    const { data: product, error: productError } = await supabase
    .from("products_duplicate")
    .select("id, category_id, sub_category_id, brand, price")
    .eq("id", productId)
    .single();
                
    let query = supabase
        .from("products_duplicate")
        .select(`id, brand, title, price, category_name, category_id, sub_category_id, color, short_description, img, 
            product_properties_values:product_properties_values(
                value,
                products_properties(
                    name
                )
            )
            `)
        .neq("id", product?.id)
        .eq("category_id", product?.category_id)
        .limit(10)


        
    const { data, count, error } = await query;

    return { data };
}   