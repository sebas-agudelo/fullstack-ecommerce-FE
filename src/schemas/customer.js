import { z } from "zod";

export const customerSchema = z.object({
    phone: z
        .string()
        .trim()
        .refine(v => v.length > 0, {
            message: "Telefonnummer krävs"
        })
        .min(10, "Telefonnumret är för kort")
        .max(12, "Telefonnumret är för långt"),

    address: z
        .string()
        .trim()
        .min(2, "Adress krävs"),

    postal_code: z
        .string()
        .trim()
        .min(5, "Postnummer krävs"),

    email: z
        .string()
        .trim()
        .min(1, "E-post krävs")
        .email("Ogiltig e-postadress"),

    fullname: z
        .string()
        .trim()
        .min(2, "För & efternamn krävs")
});