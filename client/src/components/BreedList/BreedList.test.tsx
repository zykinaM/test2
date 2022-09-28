import React from "react";
import { render, screen } from "@testing-library/react";
import BreedList from "./BreedList";

const timeline = [
  [
    {
      breed: "Furmaster",
      buy: 10,
      sell: 9,
    },
    {
      breed: "Couch Destroyer",
      buy: 18,
      sell: 17,
    },
  ],
  [
    {
      breed: "Furmaster",
      buy: 3,
      sell: 2.3,
    },
    {
      breed: "Couch Destroyer",
      buy: 20,
      sell: 19,
    },
  ],
];

describe("BreedList component", () => {
  test("renders BreedList", () => {
    render(<BreedList timeline={timeline} />);
    const title = screen.getByText(timeline[1][0].breed);
    const buy = screen.getByText(`Buy: ${timeline[0][0].buy}`);
    const sell = screen.getByText(`Sell: ${timeline[0][0].sell}`);

    expect(title).toBeInTheDocument();
    expect(buy).toBeInTheDocument();
    expect(sell).toBeInTheDocument();
  });
});
