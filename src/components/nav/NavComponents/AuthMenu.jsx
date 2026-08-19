import { GoPerson } from "react-icons/go";
import { useState, useEffect } from "react";

import { TailwindNav } from "./TailwindLinks";
import { useSession } from "../../../hooks/auth/useAuth";
import { Signuot } from "../../Signout";

export const AuthMenu = ({ toggleMenu }) => {
    const [isIcon, setIsIcon] = useState(false)
    const { data: session } = useSession();

    useEffect(() => {
        setIsIcon(false)
    }, [])

    const links = [{
        name: "Logga in",
        link: "loggain"
    },
    {
        name: "Registrera",
        link: "signup"
    }];

    return (
        <div className="">
            <div className="flex items-end space-x-1 h-[56px] my-3 px-3">
                <GoPerson className="text-2xl text-purple-950" />
                <h2 className="text-purple-950 font-bold text-sm">Min Metrico</h2>
            </div>

            {session?.user ?
                <>
                    <TailwindNav link={"konto"} name={"Min sida"} type={"auth"} toggleMenu={toggleMenu} />
                    <Signuot />
                </>
                :
                <ul className="text-[14.5px]">
                    {links.map((link) => (
                        <TailwindNav link={link.link} name={link.name} icon={isIcon} type={"auth"} toggleMenu={toggleMenu} />
                    ))}
                </ul>

            }
        </div>
    )
}