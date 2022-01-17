import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiArray, setSushiArray] = useState([]);
  const [indexOne, setIndexOne] = useState(0)
  const displayAmount = 4;
  const [plates, setPlates] = useState([])
  const [moneyRemaining, setMoneyRemaining] = useState(150)
  

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(sushiArray => setSushiArray(sushiArray))
  }, [])

  function handleShowMoreSushi () {
    if (indexOne === (sushiArray.length - displayAmount)) {
      setIndexOne(0)
    } else {
      setIndexOne(indexOne + displayAmount)
    }
  }

  function handleEatSushi(sushi) {
    setPlates([...plates, sushi])
    setMoneyRemaining(moneyRemaining - sushi.price)
  }

  

  return (
    <div className="app">
      <SushiContainer sushiArray={sushiArray.slice(indexOne, indexOne + displayAmount)} showMoreSushi={handleShowMoreSushi} eatSushi={handleEatSushi} moneyRemaining={moneyRemaining}/>
      <Table plates={plates} moneyRemaining={moneyRemaining}/>
    </div>
  );
}

export default App;
