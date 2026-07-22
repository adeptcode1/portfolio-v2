import { portfolio } from "../../data/portfolio";

function TechStack() {
    return (
        <div className="tech-stack">
            {portfolio.tech.map(item => (
                <span key={item}>
                    {item}
                </span>
            ))}
        </div>
    );
}

export default TechStack;