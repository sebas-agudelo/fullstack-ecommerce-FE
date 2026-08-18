import { Link } from "react-router-dom"

export const Logo = () => {
    return (
        <Link to={`/`} className="w-[110px] lg:w-[120px] block transition-all duration-150 ease-in md:hover:scale-105">
            <img src="/METRICO__1_-removebg-preview.png" alt="Logo" className="w-full" />
        </Link>
    )
}   