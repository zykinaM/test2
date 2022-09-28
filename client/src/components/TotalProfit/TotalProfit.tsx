import React from "react";
import { Prices } from "../BreedList/BreedList.props";

interface IBreeds {
  prices: Prices;
}

const TotalProfit: React.FC<IBreeds> = ({ prices }): JSX.Element => {
  let buyDay = 0;
  let sellDay = 0;
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      const profit = prices[j].sell - prices[i].buy;
      if (profit > totalProfit) {
        buyDay = i + 1;
        sellDay = j + 1;
        totalProfit = profit;
      }
    }
  }

  if (totalProfit > 0) {
    return (
      <>
        <div>
          Total profit: <b>{totalProfit}</b>
        </div>
        <div>
          Buy at: <b>{buyDay}</b> day
        </div>
        <div>
          Sell at: <b>{sellDay}</b> day
        </div>
      </>
    );
  }

  return <div>No bargains</div>;
};

export default TotalProfit;
