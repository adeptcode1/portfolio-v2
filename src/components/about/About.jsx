import { portfolio } from "../../data/portfolio";
import AboutHighlights from "./AboutHighlights";
import "../../styles/about.css";

function About() {
  const { about } = portfolio;

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-heading">
          <p className="section-eyebrow">{about.eyebrow}</p>

          <h2 className="section-title">{about.title}</h2>
        </div>

        <div className="about-content">
          <div className="about-story">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-focus-card">
            <p className="about-focus-label">Current Focus</p>

            <h3>Building useful software from real-world experience.</h3>

            <p>
              I am combining systems thinking, automation experience, and
              modern web development to create practical business solutions.
            </p>

            <ul className="about-focus-list">
              <li>React application development</li>
              <li>PHP and Laravel backend development</li>
              <li>Workflow automation</li>
              <li>Scalable application architecture</li>
            </ul>
          </div>
        </div>

        <AboutHighlights highlights={about.highlights} />
      </div>
    </section>
  );
}

export default About;