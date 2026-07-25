import { portfolio } from "../../data/portfolio";

function TechStack() {
    return (
        <div className="tech-stack">
            {portfolio.hero.tech.map((technology) => (
                <span className="tech-badge" key={technology}>
                    {technology}
                </span>
            ))}
        </div>
    );
}

export default TechStack;