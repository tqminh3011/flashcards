import { Link, useSearchParams } from "react-router-dom";
import type { FlashcardCategory, QuizType } from "../data/flashcards";

export const QuizSessionPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as FlashcardCategory | null;
  const typeParam = (searchParams.get("type") as QuizType | null) ?? "multiple-choice";

  if (!categoryParam) {
    return (
      <div className="app-shell">
        <main className="card" aria-labelledby="quiz-title">
          <header className="card-header">
            <div>
              <h1 id="quiz-title" className="title">
                No category selected
              </h1>
              <p className="subtitle">
                Please go back and choose a category and quiz type before starting a quiz.
              </p>
            </div>
          </header>
          <p className="footer-note">
            Return to the{" "}
            <Link to="/quiz" className="link-inline">
              quiz category selection page
            </Link>
            .
          </p>
        </main>
      </div>
    );
  }

  const categoryLabelMap: Record<FlashcardCategory, string> = {
    animals: "Animals",
    food: "Food",
    verbs: "Verbs"
  };

  const quizLabel = typeParam === "multiple-choice" ? "Multiple Choice" : "Fill in the Blank";

  return (
    <div className="app-shell">
      <main className="card" aria-labelledby="quiz-title">
        <header className="card-header">
          <div>
            <h1 id="quiz-title" className="title">
              Quiz: {categoryLabelMap[categoryParam]}
            </h1>
            <p className="subtitle">
              You&apos;ve started a {quizLabel} quiz. The full quiz experience will be implemented
              in Phase 4.
            </p>
          </div>
        </header>

        <section className="section" aria-label="Quiz placeholder">
          <p className="section-body">
            For now, this screen simply confirms that category and quiz type selection work. You can
            safely navigate back to the{" "}
            <Link to="/quiz" className="link-inline">
              quiz selection page
            </Link>{" "}
            or return to the{" "}
            <Link to="/" className="link-inline">
              home page
            </Link>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

