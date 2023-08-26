import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import FilterDropDown from "./FilterDropDown";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Button Component", () => {
  const onSelected = jest.fn();
  render(<FilterDropDown onSelected={onSelected} selectedValue="test" />);
  const button = screen.getByTestId("filter_dropdown_button");
  const dropDown = screen.getByTestId("filter_dropdown_div");
  const buttonLabel = screen.getByText("test"); // Replace with the actual button label

  // Test 1
  it("Filter button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  // Test 2
  test("Filter Button Text", () => {
    expect(button).toHaveTextContent("test");
  }); // Test 2

  test("Check expand drown down", () => {
    render(<FilterDropDown onSelected={onSelected} selectedValue="test" />);
    const innerbutton = screen.getByTestId("filter_dropdown_button");
    const innerdropDown = screen.getByTestId("filter_dropdown_div");
    expect(innerdropDown).toHaveClass("hidden", { exact: false });
    fireEvent.click(button);
    expect(innerbutton).not.toHaveClass("hidden");
  });
});
