import { Link, useSearchParams } from "react-router-dom";
import { flashcards, type FlashcardCategory } from "../data/flashcards";

export const StudySessionPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as FlashcardCategory | null;

  if (!categoryParam) {
    return (
      <div className="app-shell">
        <main className="card" aria-labelledby="study-title">
          <header className="card-header">
            <div>
              <h1 id="study-title" className="title">
                No category selected
              </h1>
              <p className="subtitle">
                Please go back and choose a category before starting a study session.
              </p>
            </div>
          </header>
          <p className="footer-note">
            Return to the{" "}
            <Link to="/study" className="link-inline">
              category selection page
            </Link>
            .
          </p>
        </main>
      </div>
    );
  }

  const cardsForCategory = flashcards.filter((card) => card.category === categoryParam);

  const categoryLabelMap: Record<FlashcardCategory, string> = {
    animals: "Animals",
    food: "Food",
    verbs: "Verbs"
  };

  return (
    <div className="app-shell">
      <main className="card" aria-labelledby="study-title">
        <header className="card-header">
          <div>
            <h1 id="study-title" className="title">
              Study: {categoryLabelMap[categoryParam]}
            </h1>
            <p className="subtitle">
              This is a simple preview of the cards in this category. A full flip-card experience
              with tracking will be added in the next phase.
            </p>
          </div>
        </header>

        <section aria-label="Cards in category" className="section">
          <h2 className="section-title">Cards</h2>
          <div className="section-body">
            {cardsForCategory.length === 0 ? (
              <p>No cards found for this category.</p>
            ) : (
              <ul>
                {cardsForCategory.map((card) => (
                  <li key={card.id}>
                    <strong>{card.spanish}</strong> — {card.english}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <p className="footer-note">
          Not the right deck?{" "}
          <Link to="/study" className="link-inline">
            Pick another category
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

