import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiArray, showMoreSushi, eatSushi, moneyRemaining }) {
  
  return (
    <div className="belt">
      {sushiArray.map(sushi => {
        return <Sushi key={sushi.id} sushi={sushi} eatSushi={eatSushi} moneyRemaining={moneyRemaining}/>
        })}
      <MoreButton showMoreSushi={showMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
