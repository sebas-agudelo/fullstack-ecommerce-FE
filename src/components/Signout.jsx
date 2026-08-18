import { useNavigate } from "react-router-dom";
import { useSignOut } from "../hooks/auth/useAuth"

export const Signuot = () => {
    const { mutate } = useSignOut();
    const nav = useNavigate();

    const handleMutate = () => {
        mutate(undefined, {
            onSuccess: (data) => {
                // alert(data?.msg)
                nav('/')
            },
            onError: (error) => {
                alert(error?.msg)
            }
        })

    }

    return (
        <div className="px-3 mt-3">
            <button
                onClick={handleMutate}
                className="border-b border-purple-800">
                Logga ut
            </button>
        </div>
    )
}