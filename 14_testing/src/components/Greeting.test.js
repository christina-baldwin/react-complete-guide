import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as text", () => {
    //arrange
    render(<Greeting />);

    //act (nothing here)

    // assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders good to see you if the button was not clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText("changed", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render the good to see you text when clicking the change button", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
