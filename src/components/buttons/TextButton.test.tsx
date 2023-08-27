import { render, screen, cleanup } from "@testing-library/react";
import TextButton from "./TextButton"; // Update the path

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("TextButton Component", () => {
  // Test 1

  test("Check button text and classNames", () => {
    const buttonText = "Click Me Text Button";

    render(<TextButton classNames="textButton">{buttonText}</TextButton>);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("textButton");
  });
});
