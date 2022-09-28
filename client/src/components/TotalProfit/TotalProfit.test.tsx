import React from "react";
import { render, screen } from "@testing-library/react";
import TotalProfit from "./TotalProfit";

const prices = [
  {
    buy: 18,
    sell: 17,
  },
  {
    buy: 20,
    sell: 19,
  },
  {
    buy: 10,
    sell: 8,
  },
  {
    buy: 2,
    sell: 1.5,
  },
  {
    buy: 15,
    sell: 14.7,
  },
];

describe("TotalProfit component", () => {
  test("renders correct TotalProfit result", () => {
    render(<TotalProfit prices={prices} />);
    const total = screen.getByText("12.7");
    const buyDay = screen.getByText("4");
    const sellDay = screen.getByText("5");

    expect(total).toBeInTheDocument();
    expect(buyDay).toBeInTheDocument();
    expect(sellDay).toBeInTheDocument();
  });
});
