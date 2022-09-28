import React, { useMemo } from "react";
import TotalProfit from "../TotalProfit/TotalProfit";
import { BreedPrices, Timeline } from "./BreedList.props";
import { FlexWrapper } from "../styles";
import { BreadHeader, BreedContainer } from "./styles";

interface IBreeds {
  timeline: Timeline;
}

const BreedList: React.FC<IBreeds> = ({ timeline }): JSX.Element => {
  const breedPricesFormatted = useMemo(() => {
    const breedPrices: BreedPrices = {};
    const flatted = timeline.flat();
    flatted.forEach((breedItem) => {
      const { breed, buy, sell } = breedItem;
      if (breed in breedPrices) {
        breedPrices[breed].push({ buy, sell });
      } else {
        breedPrices[breed] = [{ buy, sell }];
      }
    });
    return breedPrices;
  }, [timeline]);

  return (
    <FlexWrapper>
      {Object.keys(breedPricesFormatted).map((breed) => (
        <BreedContainer key={breed}>
          <BreadHeader>{breed}</BreadHeader>
          {breedPricesFormatted[breed].map((price, index) => (
            <React.Fragment key={`bread_day_${index}`}>
              <div>Day: {index + 1}</div>
              <div>Buy: {price.buy}</div>
              <div>Sell: {price.sell}</div>
            </React.Fragment>
          ))}
          <TotalProfit prices={breedPricesFormatted[breed]} />
        </BreedContainer>
      ))}
    </FlexWrapper>
  );
};
export default BreedList;
