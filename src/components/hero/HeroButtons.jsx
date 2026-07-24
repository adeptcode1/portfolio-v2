function HeroButtons() {
    return (
        <div className="hero-buttons">
            <a 
                href="#projects"
                className="hero-button hero-button-primary"
            >
                View Projects
            </a>

            <a
                href="/resume.pdf"
                className="hero-button hero-button-secondary"
                download
            >
                Download Résumé
            </a>
        </div>
    );
}

export default HeroButtons;