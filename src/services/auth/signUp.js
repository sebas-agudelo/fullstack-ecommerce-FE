import { supabase_config } from "../../supabase_config/supabase_config";
const supabase = supabase_config();

export const signUp = async (email, password) => {

    console.log("signUp function called with email: ", email, " and password: ", password)
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        // options: {
        //   emailRedirectTo: 'https://example.com/welcome',
        // },
    })

    if (error) {
        switch (error?.code) {
            case "user_already_exists":
                return { error: {email: "Användaren finns redan, försök logga in istället."} };

            case "weak_password":
                return { error: {password: "Lösenordet är för svag"} };

            default:
                return { error: "Ett oväntat fel uppstod." };
        }
    }
    return { data }
}