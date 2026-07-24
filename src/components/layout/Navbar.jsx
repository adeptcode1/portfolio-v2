import "../../styles/navbar.css";
import { logo } from "../../assets"
function Navbar() {
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand" aria-label="Go to homepage">
          <span className="brand-mark">
            <img src={logo} />
          </span>

          <span className="brand-name">
            Christopher <strong>Schaeffer</strong>
          </span>
        </a>

        <nav className="navbar-nav" aria-label="Primary navigation">
          <ul className="nav-links">
            {links.map((link) => (
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
      </div>
    </header>
  );
}

export default Navbar;