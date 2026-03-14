import { Link, useSearchParams } from "react-router-dom";
import type { FlashcardCategory } from "../data/flashcards";

type ModeProp = "study" | "quiz";

interface CategorySelectionPageProps {
  mode: ModeProp;
}

const categories: { id: FlashcardCategory; label: string; description: string }[] = [
  {
    id: "animals",
    label: "Animals",
    description: "Practice common animal nouns like cat, dog, and bird."
  },
  {
    id: "food",
    label: "Food",
    description: "Learn everyday food words like bread, cheese, and apple."
  },
  {
    id: "verbs",
    label: "Verbs",
    description: "Study high-frequency verbs such as eat, drink, and read."
  }
];

export const CategorySelectionPage = ({ mode }: CategorySelectionPageProps) => {
  const [searchParams] = useSearchParams();
  const quizType = searchParams.get("type") ?? "multiple-choice";

  const title = mode === "study" ? "Choose a category to study" : "Choose a category to quiz";
  const subtitle =
    mode === "study"
      ? "Pick one of the themed decks below to start a focused study session."
      : "Pick a category for your quiz. You can switch quiz types from the quiz screen later.";

  return (
    <div className="app-shell">
      <main className="card" aria-labelledby="category-title">
        <header className="card-header">
          <div>
            <h1 id="category-title" className="title">
              {title}
            </h1>
            <p className="subtitle">{subtitle}</p>
          </div>
          <div className="badge-row">
            <span className="badge secondary">
              Mode: {mode === "study" ? "Study" : `Quiz · ${quizType}`}
            </span>
          </div>
        </header>

        <section aria-label="Available categories">
          <div className="grid">
            {categories.map((category) => {
              const basePath = mode === "study" ? "/study/session" : "/quiz/session";
              const to =
                mode === "study"
                  ? `${basePath}?category=${category.id}`
                  : `${basePath}?category=${category.id}&type=${quizType}`;

              return (
                <Link key={category.id} to={to} className="nav-button">
                  <div>
                    <div className="nav-label">{category.label}</div>
                    <p className="nav-description">{category.description}</p>
                  </div>
                  <span className="nav-pill">
                    {mode === "study" ? "Start study session" : "Start quiz"}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <p className="footer-note">
          You can always change mode by returning to the{" "}
          <Link to="/" className="link-inline">
            Home page
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

