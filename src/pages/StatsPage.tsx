export const StatsPage = () => {
  return (
    <div className="app-shell">
      <main className="card" aria-labelledby="stats-title">
        <header className="card-header">
          <div>
            <h1 id="stats-title" className="title">
              Study Statistics
            </h1>
            <p className="subtitle">
              This page will summarize your study progress once tracking is implemented in later
              phases.
            </p>
          </div>
        </header>

        <section className="section" aria-label="Placeholder statistics">
          <h2 className="section-title">Coming soon</h2>
          <p className="section-body">
            For Phase 1, this page is a static placeholder. Future phases will display total cards
            studied, accuracy, and a category breakdown based on your study and quiz sessions.
          </p>
        </section>
      </main>
    </div>
  );
};

