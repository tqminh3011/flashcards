export type QuizType = "multiple-choice" | "fill-in-the-blank";

export type FlashcardCategory = "animals" | "food" | "verbs";

export interface Flashcard {
  id: string;
  category: FlashcardCategory;
  spanish: string;
  english: string;
  quiz: {
    type: QuizType;
    options?: string[];
  };
}

export const flashcards: Flashcard[] = [
  {
    id: "animals-1",
    category: "animals",
    spanish: "el gato",
    english: "the cat",
    quiz: {
      type: "multiple-choice",
      options: ["the dog", "the house", "the cat", "the bird"]
    }
  },
  {
    id: "animals-2",
    category: "animals",
    spanish: "el perro",
    english: "the dog",
    quiz: {
      type: "multiple-choice",
      options: ["the horse", "the dog", "the cow", "the pig"]
    }
  },
  {
    id: "animals-3",
    category: "animals",
    spanish: "el pájaro",
    english: "the bird",
    quiz: {
      type: "multiple-choice",
      options: ["the fish", "the bird", "the cat", "the rabbit"]
    }
  },
  {
    id: "food-1",
    category: "food",
    spanish: "la manzana",
    english: "the apple",
    quiz: {
      type: "multiple-choice",
      options: ["the bread", "the orange", "the apple", "the cheese"]
    }
  },
  {
    id: "food-2",
    category: "food",
    spanish: "el pan",
    english: "the bread",
    quiz: {
      type: "multiple-choice",
      options: ["the water", "the soup", "the rice", "the bread"]
    }
  },
  {
    id: "food-3",
    category: "food",
    spanish: "el queso",
    english: "the cheese",
    quiz: {
      type: "multiple-choice",
      options: ["the milk", "the egg", "the cheese", "the salad"]
    }
  },
  {
    id: "verbs-1",
    category: "verbs",
    spanish: "comer",
    english: "to eat",
    quiz: {
      type: "multiple-choice",
      options: ["to drink", "to sleep", "to eat", "to read"]
    }
  },
  {
    id: "verbs-2",
    category: "verbs",
    spanish: "beber",
    english: "to drink",
    quiz: {
      type: "multiple-choice",
      options: ["to sing", "to drink", "to write", "to run"]
    }
  },
  {
    id: "verbs-3",
    category: "verbs",
    spanish: "leer",
    english: "to read",
    quiz: {
      type: "multiple-choice",
      options: ["to write", "to read", "to listen", "to speak"]
    }
  }
];

