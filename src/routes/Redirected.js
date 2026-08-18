import { useNavigate } from "react-router-dom";
import { useSession } from "../hooks/auth/useAuth"

export const Redirected = ({ children }) => {
    const { data: session } = useSession();
    const nav = useNavigate();

    if (session?.user !== null) {
        nav("/konto")
    }

    return children
}