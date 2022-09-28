import React, { useCallback, useState } from "react";
import Button from "../Button/Button";
import { FlexWrapper } from "../styles";

interface IProps {
  markets: string[];
  selectMarket: (market: string) => void;
}

const MarketList: React.FC<IProps> = ({
  markets,
  selectMarket,
}): JSX.Element => {
  const [currentMarket, setCurrentMarket] = useState<string | null>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const market = event.currentTarget.id;
      setCurrentMarket(market);
      selectMarket(market);
    },
    [selectMarket]
  );

  return (
    <FlexWrapper>
      {markets.map(
        (market): JSX.Element => (
          <Button
            id={market}
            key={market}
            onClick={handleClick}
            isActive={market === currentMarket}
          >
            {market}
          </Button>
        )
      )}
    </FlexWrapper>
  );
};
export default React.memo(MarketList);
