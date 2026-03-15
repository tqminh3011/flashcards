import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="app-shell">
      <main className="card" aria-labelledby="home-title">
        <header className="card-header">
          <div>
            <h1 id="home-title" className="title">
              Learning Spanish Card Game
            </h1>
            <p className="subtitle">
              Practice core Spanish vocabulary with focused study, quizzes, and simple stats.
            </p>
          </div>
          <div className="badge-row">
            <span className="badge">Phase 1 · Navigation</span>
            <span className="badge secondary">Vite · React · TypeScript</span>
          </div>
        </header>

        <section aria-label="Primary actions">
          <div className="grid">
            <Link to="/study" className="nav-button">
              <div>
                <div className="nav-label">Study Mode</div>
                <p className="nav-description">
                  Flip through flashcards one by one and focus on understanding the vocabulary.
                </p>
                <div className="category-chips">
                  <span className="chip">Animals</span>
                  <span className="chip">Food</span>
                  <span className="chip">Verbs</span>
                </div>
              </div>
              <span className="nav-pill">Go to category selection</span>
            </Link>

            <Link to="/quiz" className="nav-button">
              <div>
                <div className="nav-label">Quiz Mode</div>
                <p className="nav-description">
                  Test yourself with multiple-choice and fill-in-the-blank questions.
                </p>
                <div className="category-chips">
                  <span className="chip">Multiple Choice</span>
                  <span className="chip">Fill in the Blank</span>
                </div>
              </div>
              <span className="nav-pill">Pick quiz category</span>
            </Link>

            <Link to="/stats" className="nav-button">
              <div>
                <div className="nav-label">Stats</div>
                <p className="nav-description">
                  See how many cards you&apos;ve studied and your overall accuracy.
                </p>
              </div>
              <span className="nav-pill">View learning stats</span>
            </Link>
          </div>
        </section>

        <section className="section" aria-label="How it works">
          <h2 className="section-title">How it works</h2>
          <p className="section-body">
            Start in Study mode to get familiar with the vocabulary, then switch to Quiz mode to
            challenge yourself. Your performance will be summarized on the Stats page as later
            phases are implemented.
          </p>
        </section>

        <p className="footer-note">
          Tip: You can always return home by clicking your browser&apos;s back button or navigating
          to <span className="link-inline">/</span>.
        </p>
      </main>
    </div>
  );
};

