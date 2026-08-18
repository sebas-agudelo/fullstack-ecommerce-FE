import { supabase_config } from "../../supabase_config/supabase_config"
const supabase = supabase_config();

export const getPopularProducts = async () => {
    const { data: popular, error: popularError } = await supabase
        .from('products_duplicate')
        .select(
            `id, brand, title, price, category_name, category_id, sub_category_id, color, short_description, img, 
            product_properties_values:product_properties_values(
                value,
                products_properties(
                    name
                )
            )   `
        )
        .limit(3, { foreignTable: 'product_properties_values' })
        .order('popular', { ascending: false })
        .limit(10)

    if (popularError) {
        console.error(popularError.message)
        throw new Error("Vi kunde inte hämta populära produkter just nu.")
    }

    return popular
}

export const getNewProducts = async () => {
    const { data: news, error: newsError } = await supabase
        .from('products_duplicate')
        .select('id, brand, title, price, img, short_description, category_name')
        .eq('is_new', true)

    if (newsError) {
        console.error(newsError.message)
        throw new Error("Vi kunde inte hämta dom nyaste produkter just nu.")
    }

    return news
}
