import { test, expect } from "@playwright/test";

test.describe("Study mode basic flow", () => {
  test("user can flip cards, mark right/wrong, and progress through a category", async ({ page }) => {
    await page.goto("/");

    // Go to Study category selection
    await page.getByRole("link", { name: /Study Mode/i }).click();
    await expect(page).toHaveURL(/\/study/);

    // Choose Animals category
    await page.getByRole("link", { name: /Animals/ }).click();
    await expect(page).toHaveURL(/\/study\/session/);
    await expect(page.getByRole("heading", { name: /Study: Animals/i })).toBeVisible();

    // We should be on the first card, with Spanish visible
    await expect(page.getByText("el gato")).toBeVisible();

    // Flip the card
    const cardButton = page.getByRole("button", { name: /Show English translation/i });
    await cardButton.click();

    // English side visible, with Right/Wrong buttons
    await expect(page.getByText("the cat")).toBeVisible();
    await expect(page.getByRole("button", { name: /I got it right/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /I got it wrong/i })).toBeVisible();

    // Mark wrong, should move to next card (el perro)
    await page.getByRole("button", { name: /I got it wrong/i }).click();
    await expect(page.getByText("el perro")).toBeVisible();

    // Flip and mark right this time
    await cardButton.click();
    await expect(page.getByText("the dog")).toBeVisible();
    await page.getByRole("button", { name: /I got it right/i }).click();

    // Fast-forward: flip and answer remaining cards until summary
    while (await cardButton.isVisible().catch(() => false)) {
      await cardButton.click();
      const rightButton = page.getByRole("button", { name: /I got it right/i });
      if (!(await rightButton.isVisible().catch(() => false))) {
        break;
      }
      await rightButton.click();
    }

    // Summary appears after all cards are reviewed
    await expect(page.getByText(/Session complete!/i)).toBeVisible();
    await expect(page.getByText(/You reviewed 3 card/i)).toBeVisible();
  });
});

