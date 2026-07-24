import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import "../../styles/navbar.css";
import { logo } from "../../assets";
const navigationLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a
          href="#home"
          className="navbar-brand"
          aria-label="Go to homepage"
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            <img src={logo} />
          </span>

          <span className="brand-name">
            Christopher <strong>Schaeffer</strong>
          </span>
        </a>

        <nav className="navbar-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="/resume.pdf"
          className="navbar-resume"
          download
        >
          Download Résumé
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X size={26} aria-hidden="true" />
          ) : (
            <Menu size={26} aria-hidden="true" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-navigation ${
          isMenuOpen ? "mobile-navigation-open" : ""
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="mobile-nav-links">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          className="mobile-resume-button"
          download
          onClick={closeMenu}
        >
          Download Résumé
        </a>
      </nav>
    </header>
  );
}

export default Navbar;