import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MarketList from "./MarketList";

const markets = ["Catdaq", "Kitsy", "Bravest", "The Night", "Metal Hands"];

describe("MarketList component", () => {
  let mockOnClick: jest.Mock;
  const setup = () =>
    render(<MarketList markets={markets} selectMarket={mockOnClick} />);
  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  test("renders MarketList", () => {
    setup();
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements).toHaveLength(markets.length);
  });

  test("renders MarketList element markets[1]", () => {
    setup();
    const buttonElement = screen.getByText(markets[1]);
    expect(buttonElement).toBeInTheDocument();
  });

  test("should selectMarket be called", () => {
    setup();
    userEvent.click(screen.getByText(markets[1]));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
