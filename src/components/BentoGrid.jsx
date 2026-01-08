const BentoGrid = () => {
  return (
    <section className="content-section">
      <div className="section-header">
        <h2>Latest Insights</h2>
        <a href="#all" style={{ borderBottom: "1px solid currentColor" }}>
          View all articles &rarr;
        </a>
      </div>

      <div className="bento-grid">
        {/* Card 1: Large */}
        <div className="card card-large">
          <span className="tag">Editor's Pick</span>
          <h3>Understanding Heart Health in Your 30s</h3>
          <p>Why early prevention is better than cure.</p>
        </div>

        {/* Card 2: Tall (Image) */}
        <div className="card card-tall">
          <div className="card-content">
            <span className="tag">Nutrition</span>
            <h3>The Gut-Brain Connection</h3>
          </div>
        </div>

        {/* Card 3: Standard */}
        <div className="card">
          <span className="tag">Mental Health</span>
          <h3>Digital Anxiety</h3>
          <p>How screen time impacts dopamine levels.</p>
        </div>

        {/* Card 4: Standard */}
        <div className="card">
          <span className="tag">Pediatrics</span>
          <h3>Seasonal Flu Guide</h3>
          <p>Updated protocols for 2026.</p>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;