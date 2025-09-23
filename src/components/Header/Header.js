import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/mobile_logo.jpg"; // make sure this file exists

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={closeMenu}>
          <img className="header__logo" src={logo} alt="Brand logo" />
          <span className="header__title">Pistachio</span>
        </Link>

        <button
          className="header__toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header__burger" />
        </button>

        <nav
          id="site-nav"
          className={`header__nav ${open ? "header__nav--open" : ""}`}
        >
          <ul className="header__list">
            {[
              { to: "/", label: "Home", end: true },
              { to: "/services", label: "Services" },
              { to: "/packages", label: "Packages" },
              { to: "/gallery", label: "Gallery" },
              { to: "/faq", label: "FAQ" },
            ].map(({ to, label, end }) => (
              <li className="header__item" key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `header__link ${isActive ? "header__link--active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <li className="header__item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `header__link header__link--cta ${
                    isActive ? "header__link--active" : ""
                  }`
                }
                onClick={closeMenu}
              >
                Get Quote
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {open && (
        <button
          className="header__overlay header__overlay--visible"
          onClick={closeMenu}
          aria-label="Close menu overlay"
        />
      )}
    </header>
  );
}
