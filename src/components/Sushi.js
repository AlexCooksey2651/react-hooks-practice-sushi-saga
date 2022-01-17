import React, { useState } from "react";

function Sushi({ sushi, eatSushi, moneyRemaining }) {
  const { name, img_url, price } = sushi
  const [isEaten, setIsEaten] = useState(false)
  
  function handleEatSushi() {
    console.log(moneyRemaining)
    console.log(price)
    if (moneyRemaining >= price) {
      eatSushi(sushi)
      setIsEaten(!isEaten)
    } else {
      alert("I'm sorry, looks like you don't have enough! Please add funds to continue eating ::yum:")
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={/* Give me a callback! */ null}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : <img src={img_url} alt={name} width="100%" onClick={handleEatSushi}/>}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
