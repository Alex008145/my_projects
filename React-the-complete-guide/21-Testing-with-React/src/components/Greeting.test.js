import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders 'Hello world' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("render 'It's good to see you!' if the button was NOT clicked", () => {
    render(<Greeting />);

    const changedElement = screen.queryByText("It's good to see you!", {
      exact: false,
    });
    expect(changedElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does NOT render Its good to see you! if the button was clicked", async () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
