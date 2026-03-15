import { useState } from "react";

interface FlashcardProps {
  spanish: string;
  english: string;
  onMarkRight: () => void;
  onMarkWrong: () => void;
}

export const Flashcard = ({ spanish, english, onMarkRight, onMarkWrong }: FlashcardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped((prev) => !prev);
  };

  const handleMarkRight = () => {
    onMarkRight();
    setFlipped(false);
  };

  const handleMarkWrong = () => {
    onMarkWrong();
    setFlipped(false);
  };

  return (
    <div className="study-card">
      <button
        type="button"
        className={`study-card-inner ${flipped ? "flipped" : ""}`}
        onClick={handleFlip}
        aria-label={flipped ? "Show Spanish word" : "Show English translation"}
      >
        <span className="study-card-face front">
          <span className="study-card-text">
            {spanish}
            <span className="study-card-hint">Tap to flip</span>
          </span>
        </span>
        <span className="study-card-face back">
          <span className="study-card-text">{english}</span>
        </span>
      </button>

      {flipped && (
        <div className="study-actions" aria-label="Mark your answer">
          <button type="button" className="btn correct" onClick={handleMarkRight}>
            ✅ I got it right
          </button>
          <button type="button" className="btn incorrect" onClick={handleMarkWrong}>
            ❌ I got it wrong
          </button>
        </div>
      )}
    </div>
  );
};

