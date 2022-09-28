import "destyle.css";

import "./App.css";
import MarketPage from "./containers/MarketPage/MarketPage";
import { MainWrapper } from "./components/styles";

function App() {
  return (
    <MainWrapper>
      <MarketPage />
    </MainWrapper>
  );
}

export default App;
