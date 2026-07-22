import "../../styles/navbar.css";
function Navbar() {
    const links = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Contact",
    ];

    return (
        <header className="navbar">
            <div className="container">
                <div className="logo">
                    <span className="logo-text">
                        Christopher Schaeffer
                    </span>
                </div>

                <nav>
                    <ul className="nav-links">
                        {links.map(link => (
                            <li key={link}>
                                <a href={`#${link.toLowerCase()}`}>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <button className="resume-button">
                    Download Résumé
                </button>
            </div>
        </header>
    );
}

export default Navbar;