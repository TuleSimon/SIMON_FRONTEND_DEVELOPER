import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import FilledButton from "./FilledButton"; // Update the path

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("FilledButton Component", () => {
  // Test 1

  test("Check button text and classNames", () => {
    const buttonText = "Click Me Filled Button";

    render(<FilledButton disabled={true} classNames="filledButton">{buttonText}</FilledButton>);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveClass("filledButton");
  });
});
