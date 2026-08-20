import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link to={`/`} className="w-[122px] lg:w-[132px] block transition-all duration-150 ease-in md:hover:scale-105">
            <img src="/Elegant_Minimalist_Calligraphy_Initials_logo-removebg-preview.png" alt="Logo" className="w-full" />
        </Link>
    )
}   