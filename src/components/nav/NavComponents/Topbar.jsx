import { Link } from "react-router-dom";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { useSession } from "../../../hooks/auth/useAuth";

export const TopBar = () => {
    const { data: session } = useSession();

    return (
        <div className="md:flex justify-end w-full hidden text-white text-[12px] px-8 py-2 bg-purple-950">
            <div className="flex space-x-6">
                <Link to={''} className="flex items-center space-x-2"><TfiHeadphoneAlt /> <p>Kundtjänst</p></Link>
                <Link to={session?.user ? '/konto' : '/'}>{session?.user ? "Mitt konto" : "Bli kund"}</Link>

            </div>
        </div>
    )
}