import { useSession } from "../hooks/auth/useAuth"
import { useNavigate } from "react-router-dom";

export const Protected = ({ children }) => {
    const { data: session } = useSession();

    const nav = useNavigate();

    if (session?.user === null) {
        return nav("/loggain");
    }

    return children
} 