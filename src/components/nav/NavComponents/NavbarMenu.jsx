import { useState } from "react";

import { NavLinks } from "./NavLinks";

import { RxHamburgerMenu } from "react-icons/rx";

export const NavbarMenu = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div>
            <RxHamburgerMenu onClick={() => { toggleMenu() }} className="text-2xl" />
            <NavLinks toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
    )
}