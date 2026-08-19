import { useLocation } from "react-router-dom";

import { Logo } from "../Common/Logo";
import { Search } from "../Search";
import { TopBar } from "./NavComponents/Topbar";
import { NavbarMenu } from "./NavComponents/NavbarMenu";
import { Icons } from "./NavComponents/Icons";

export default function Navbar() {
  const location = useLocation();

  const hideNavbar = [
    "/checkout",
    "/loggain",
    "/registrera",
    "/confirm"
  ].includes(location.pathname);

  const hiddenSearchBar = [
    "/cart",
  ].includes(location.pathname);

  return (
    <header>
      {!hideNavbar && (
        <nav className="w-full bg-white">
          <TopBar />

          <div className="menu lg:h-[96px] flex flex-col justify-evenly px-4 lg:px-6 py-6 lg:py-0 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3 md:space-x-6">
                <NavbarMenu />
                <Logo />
              </div>

              {!hiddenSearchBar && (
                <div className="hidden lg:block w-[55%]">
                  <Search />
                </div>
              )}

              <Icons />

            </div>
            {!hiddenSearchBar && (
              <div className="lg:hidden w-full mt-4">
                <Search />
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
