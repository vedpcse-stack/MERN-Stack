import React from "react";
import Cards from "./Cards";

const RightContent = (props) => {
  let cardsData = props.users;
  let t = 9
  return (
    <div id="right" className="flex flex-nowrap gap-10 w-2/3  bg-white overflow-x-auto">
      {cardsData.map((card,ixd) => (
        <div key={ixd}>
            <Cards id={card.id} imageUrl={card.imageUrl} content={card.content} bottomText={card.bottomText} color={card.color} />
        </div>
      ))}
    </div>
  );
};

export default RightContent;
