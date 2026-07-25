import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";
import "../../styles/hero.css";
import { profile } from "../../assets";
import { portfolio } from "../../data/portfolio";

function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                {/* Left Column */}
                <div className="hero-content">
                    <p className="hero-intro">
                        {portfolio.hero.intro}
                    </p>
                    <h1 className="hero-name">{portfolio.name}</h1>

                    <h2 className="hero-title">
                        {portfolio.hero.headline.map(word => (
                            <span key={word}>
                                {word}
                            </span>
                        ))}
                    </h2>

                    <p className="hero-description">{portfolio.hero.description}</p>

                    <HeroButtons />
                    <TechStack />
                </div>
                
                {/*Right Column */}
                <div className="hero-image">
                    <img src={profile} alt="Christopher Schaeffer" className="hero-photo"/>
                </div>
            </div>
        </section>
    );
}

export default Hero;