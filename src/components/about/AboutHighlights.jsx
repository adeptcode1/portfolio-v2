function AboutHighlights({ highlights }) {
  return (
    <div className="about-highlights">
      {highlights.map((highlight) => (
        <article className="about-highlight-card" key={highlight.title}>
          <span className="about-highlight-marker" aria-hidden="true" />

          <h3>{highlight.title}</h3>

          <p>{highlight.description}</p>
        </article>
      ))}
    </div>
  );
}

export default AboutHighlights;