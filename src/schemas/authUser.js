import { z } from "zod";

export const authUserSchema = z.object({
    email: z.string().trim().min(1, "E-post krävs").email("Ogiltig e-postadress"),
    password: z.string().trim().min(1, "Lösenord krävs")
});