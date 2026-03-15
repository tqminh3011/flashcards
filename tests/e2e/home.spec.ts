import { test, expect } from "@playwright/test";

test.describe("Home navigation", () => {
  test("shows main actions and navigates to Study, Quiz, and Stats", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("heading", { name: "Spanish Flashcards" })).toBeVisible();

    const studyButton = page.getByRole("link", { name: /Study Mode/i });
    const quizButton = page.getByRole("link", { name: /Quiz Mode/i });
    const statsButton = page.getByRole("link", { name: /Stats/i });

    await expect(studyButton).toBeVisible();
    await expect(quizButton).toBeVisible();
    await expect(statsButton).toBeVisible();

    // Study navigation
    await studyButton.click();
    await expect(page).toHaveURL(/\/study/);
    await expect(page.getByRole("heading", { name: /Choose a category to study/i })).toBeVisible();

    // Back to home
    await page.goto("/");

    // Quiz navigation
    await quizButton.click();
    await expect(page).toHaveURL(/\/quiz/);
    await expect(page.getByRole("heading", { name: /Choose a category to quiz/i })).toBeVisible();

    // Back to home
    await page.goto("/");

    // Stats navigation
    await statsButton.click();
    await expect(page).toHaveURL(/\/stats/);
    await expect(page.getByRole("heading", { name: /Study Statistics/i })).toBeVisible();
  });
});

