import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { flashcards, type FlashcardCategory } from "../data/flashcards";
import { Flashcard } from "../components/Flashcard";

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongCardIds, setWrongCardIds] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);

  const hasCards = cardsForCategory.length > 0;
  const currentCard = hasCards && !finished ? cardsForCategory[currentIndex] : null;

  const total = cardsForCategory.length;
  const currentNumber = currentIndex + 1;

  const categoryLabelMap: Record<FlashcardCategory, string> = {
    animals: "Animals",
    food: "Food",
    verbs: "Verbs"
  };

  const goToNextCard = () => {
    if (currentIndex + 1 < total) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const handleMarkRight = () => {
    goToNextCard();
  };

  const handleMarkWrong = () => {
    if (currentCard) {
      setWrongCardIds((prev) => (prev.includes(currentCard.id) ? prev : [...prev, currentCard.id]));
    }
    goToNextCard();
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
              Flip the card to see the English translation, then mark whether you knew it.
            </p>
          </div>
        </header>

        {!hasCards && (
          <section className="section">
            <p className="section-body">No cards found for this category.</p>
          </section>
        )}

        {hasCards && !finished && currentCard && (
          <section className="section study-layout" aria-label="Study card">
            <div className="study-meta">
              <span className="study-progress">
                Card {currentNumber} of {total}
              </span>
              <span className="pill">
                Wrong so far: {wrongCardIds.length} / {total}
              </span>
            </div>

            <Flashcard
              spanish={currentCard.spanish}
              english={currentCard.english}
              onMarkRight={handleMarkRight}
              onMarkWrong={handleMarkWrong}
            />
          </section>
        )}

        {hasCards && finished && (
          <section className="section study-summary" aria-label="Study summary">
            <p>
              Session complete! You reviewed {total} card{total === 1 ? "" : "s"} in the{" "}
              {categoryLabelMap[categoryParam]} deck.
            </p>
            <p>
              You marked <strong>{total - wrongCardIds.length}</strong> as right and{" "}
              <strong>{wrongCardIds.length}</strong> as wrong.
            </p>
          </section>
        )}

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

