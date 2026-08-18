import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";

export const TailwindNav = ({ link, name, icon, toggleSubMenu, toggleMenu, type }) => {

    return (
        <li className="border-b h-[60px] md:h-[56px]">
            <Link to={type === "auth" ? `/${link}` : `/products/${type}/${link}`}
                className="h-full flex justify-between"
            > <p onClick={toggleMenu} className={`w-full h-full flex items-center px-3 md:hover:bg-purple-950 md:hover:text-white ${icon ? "" : ""}`}>
                    {name}
                </p>
                {icon ?
                    <div onClick={(e) => {
                        e.preventDefault()
                        toggleSubMenu()
                    }} className="flex justify-center items-center border-t border-l border-r w-[15%] h-full md:hover:bg-purple-950 md:hover:text-white">
                        <MdKeyboardArrowRight className="text-2xl" />
                    </div>
                    : null}
            </Link>
        </li>
    )
}