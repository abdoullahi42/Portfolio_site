import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

interface NavLink {
  name: string;
  link: string;
}

const navlinks: NavLink[] = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleBar(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="sticky z-[100] top-0 left-0">
      <nav className="flex justify-between px-[25px] md:px-[30px] md:py-[10px] md:pr-[52px] bg-white border-b border-white items-center">
        <div className="logo-container">
          <h2 className="w-[80px] h-[50px] border-none font-semibold">AS</h2>
        </div>

        {/* Mobile view */}
        {isOpen && (
          <div className="flex flex-col w-full h-[92vh] bg-white items-center gap-3 fixed top-0 left-0 md:hidden">
            <button
              type="button"
              className="mobile-icon mobile-menu mt-3 pt-3"
              onClick={toggleBar}
              aria-label="Close navigation menu"
            >
              <FaTimes className="text-current" />
            </button>

            <ul className="flex flex-col gap-2.5">
              {navlinks.map((nav) => (
                <li key={nav.name} className="list-none">
                  <a
                    href={nav.link}
                    onClick={() => setIsOpen(false)}
                    className="text-black hover:text-blue-500 font-semibold text-xl"
                  >
                    {nav.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop view */}
        <div className="hidden md:block">
          <ul className="flex gap-10">
            {navlinks.map((nav) => (
              <li key={nav.name} className="list-none">
                <a
                  href={nav.link}
                  className="text-black hover:text-blue-500 font-semibold text-xl"
                >
                  {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {!isOpen && (
          <button
            type="button"
            className="mobile-menu inline-block md:hidden"
            onClick={toggleBar}
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <FaBars className="text-current" />
          </button>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
