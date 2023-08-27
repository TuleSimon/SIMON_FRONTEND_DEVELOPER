import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import "@testing-library/jest-dom";
import CapsuleList from "./CapsulesList";
import testCapsules from "../data/testcapsules.json"

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Button Component", () => {
  const onClicked = jest.fn();

  // Test 1
 
  test("Check items render and clicks", () => {
    render(<CapsuleList onCapsuleClicked={onClicked} capsules={testCapsules} />);
    const capsule = screen.getAllByText("View Details") as HTMLElement[];
    const itemToClick = capsule[1];
    fireEvent.click(itemToClick);
    expect(onClicked).toBeCalled();
  });

});
