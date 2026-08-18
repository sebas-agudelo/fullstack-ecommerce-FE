import { Link } from "react-router-dom";

import { Logo } from "../Common/Logo";
import { Shipping } from "./Shipping";
import { SocialLinks } from "./SocialLinks";
import { Sections } from "./Sections";

export const Footer = () => {
    return (
        <footer className="h-auto ">
            <Shipping />
            <div className="">

                <div className="md:flex justify-between pt-12 pb-6 md:py-12 h-auto px-4 md:px-8">
                    <div className="md:w-[35%] mb-16 md:mb-10">
                        <div className="mb-8">
                            <Logo />
                        </div>

                        <div>
                            <p className="mb-8 text-sm pr-8">Bli först med att ta del av kampanjer, nyheter och tips från Metrico direkt till din mejl</p>
                            <Link to={''} className="border border-purple-950 py-2 px-6 rounded-xl font-medium lg:hover:shadow-md lg:hover:bg-purple-950 lg:hover:text-white transition-all duration-150 ease-in">Anmäl dig</Link>
                        </div>
                    </div>

                    <Sections />
                </div>

               <SocialLinks />

                <div className="text-xs font-normal flex flex-col md:flex-row justify-center items-center md:gap-16 py-6">
                    <p>© 2026 Metricos. All rights reserved.</p>
                    <p className="orgnr">Organisationsnummer: 555555555555</p>
                </div>
            </div>
        </footer>
    )
}