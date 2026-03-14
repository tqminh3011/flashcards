import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CategorySelectionPage } from "./pages/CategorySelectionPage";
import { StatsPage } from "./pages/StatsPage";
import { StudySessionPage } from "./pages/StudySessionPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/study" element={<CategorySelectionPage mode="study" />} />
      <Route path="/study/session" element={<StudySessionPage />} />
      <Route path="/quiz" element={<CategorySelectionPage mode="quiz" />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
};

