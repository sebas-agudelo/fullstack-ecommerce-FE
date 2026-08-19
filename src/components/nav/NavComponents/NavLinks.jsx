import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

import { useState, useEffect } from "react";

import { useCategories } from '../../../hooks/useCategories';
import { AuthMenu } from "./AuthMenu";
import { TailwindNav } from "./TailwindLinks";


export const NavLinks = ({ toggleMenu, isMenuOpen }) => {
    const { data: categories } = useCategories();
        
    const [isIcon, setIsIcon] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(null);

    const toggleSubMenu = (id) => {
        setIsCategoryOpen(isCategoryOpen === id ? null : id);
    };

    useEffect(() => {
        if (isCategoryOpen === null) {
            setIsIcon(true)
        } else {
            setIsIcon(false)
        }
    }, [isCategoryOpen])

    return (
        <div
            className={`
        w-full md:w-[45%] xl:w-[28%] h-screen fixed top-0 left-0
        bg-gray-50  shadow-2xl
        transform transition-transform duration-300 ease-in-out z-[999]
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full pointer-events-none"}
        `}
        >
            <div className="flex justify-between items-center bg-purple-950 p-2">
                <div>{isCategoryOpen ?
                    <p onClick={() => toggleSubMenu(null)} className="flex items-center text-white text-sm md:cursor-pointer"><IoIosArrowRoundBack className="text-2xl" /> Tillbaka</p>

                    :
                    <h2 className="text-sm text-white font-bold">Meny</h2>
                }
                </div>
                <AiOutlineClose onClick={toggleMenu} className="text-white text-xl md:cursor-pointer" />
            </div>

            <ul className="flex flex-col text-[14.5px]">
                {isCategoryOpen === null ? (
                    categories &&
                    categories.map((item) => (
                        <TailwindNav
                            key={item.id}
                            link={item.id}
                            name={item.category}
                            icon={isIcon}
                            toggleSubMenu={() => toggleSubMenu(item.id)}
                            toggleMenu={toggleMenu}
                            type={"category"}
                        />
                    ))
                ) : (
                    categories
                        .find((item) => item.id === isCategoryOpen)
                        ?.sub_categories.map((sub) => (
                            <TailwindNav
                                key={sub.id}
                                link={sub.id}
                                name={sub.sub_category}
                                icon={isIcon}
                                toggleMenu={toggleMenu}
                                type={"sub"}
                            />
                        ))
                )}
            </ul>

            {isCategoryOpen === null && (
                <AuthMenu toggleMenu={toggleMenu} />
            )}
        </div>
    )
}