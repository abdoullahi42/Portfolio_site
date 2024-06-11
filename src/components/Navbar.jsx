import { useState } from "react";
import "../styles/NavBar.css";

const navlinks = [
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
  const [isOpen, setIsOpen] = useState(false);

  function ToggleBar() {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <nav>
        <div className="logo-container">
          <h2 className="Logo">AS</h2>
        </div>
        {isOpen && (
          <div className="mobile-nav">
            <span className="mobile-icon mobile-menu iconx" onClick={ToggleBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon"
                viewBox="0 0 512 512"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="32"
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </span>
            <ul onClick={ToggleBar}>
              {navlinks.map((nav) => (
                <li key={nav.name}>
                  <a href={nav.link}>{nav.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/*desktop view */}

        <div className="Desktop-view">
          <ul>
            {navlinks.map((nav) => (
              <li key={nav.name}>
                <a href={nav.link}>{nav.name}</a>
              </li>
            ))}
          </ul>
        </div>
        {!isOpen && (
          <span className="mobile-menu" onClick={ToggleBar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </span>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
