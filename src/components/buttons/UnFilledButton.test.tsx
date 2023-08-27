import { render, screen, cleanup } from "@testing-library/react";
import UnFilledButton from "./UnFilledButton"; // Update the path

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Unfilled Button Component", () => {
  // Test 1
  test("Check items render and classNames", () => {
    const buttonText = "Click Me";

    render(<UnFilledButton classNames="hello">{buttonText}</UnFilledButton>);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("hello");
  });
});
