import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button component", () => {
  test("renders Button children", () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByText("Test");
    expect(buttonElement).toBeInTheDocument();
  });

  test("should onClick be called", () => {
    let mockOnClick: jest.Mock = jest.fn();
    render(<Button onClick={mockOnClick}>Test</Button>);
    userEvent.click(screen.getByText("Test"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("renders Button active style correct", () => {
    render(<Button isActive>Test</Button>);
    const buttonElement = screen.getByText("Test");
    const style = window.getComputedStyle(buttonElement);
    expect(style.background).toBe("green");
  });
});
