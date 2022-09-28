import React, { useEffect } from "react";
import { useState } from "react";
import BreedList from "../../components/BreedList/BreedList";
import MarketList from "../../components/MarketList/MarketList";
import { Timeline } from "../../components/BreedList/BreedList.props";

const MarketPage: React.FC = (): JSX.Element => {
  const [timeline, setTimeline] = useState<Timeline>([]);
  const [markets, setMarkets] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:7421/cat-markets")
      .then((res) => res.json())
      .then((data) => {
        setMarkets(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleGetBreedList = (market: string): void => {
    fetch(`http://localhost:7421/cat-market/${market}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeline(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <MarketList markets={markets} selectMarket={handleGetBreedList} />
      <BreedList timeline={timeline} />
    </>
  );
};
export default React.memo(MarketPage);
