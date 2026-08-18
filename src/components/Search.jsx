import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search)
    const searchQuery = params.get("search") || "";

    const [query, setQuery] = useState(searchQuery);

    useEffect(() => {
        setQuery(searchQuery)
    }, [searchQuery])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.trim()) {
            return
        }
        navigate(`/products?search=${query}`)
    }

    return (

        <div className="w-full">
            <form onSubmit={handleSubmit} className="w-full relative">
                <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Sök produkter..." className="w-full py-[5px] pl-10 pr-5 rounded-2xl border-[1px] border-purple-950 relative" />
                <IoIosSearch className="absolute top-1/2 transform -translate-y-1/2 left-[2%] -translate-x[2%] text-2xl" />
            </form>
        </div>
    )
}