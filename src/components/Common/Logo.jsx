import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link to={`/`} className="w-[130px] lg:w-[148px] block transition-all duration-150 ease-in md:hover:scale-105">
            <img src="/Elegant_Minimalist_Calligraphy_Initials_logo__2_-removebg-preview.png" alt="Logo" className="w-full" />
        </Link>
    )
}   