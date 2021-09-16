import React from "react";

const SportsBar = () => {

    const sports = [
        {id: 1, name: 'Rugby'},
        {id:2, name: 'Football'},
        {id:3, name: 'Basket'}
    ];

    const displaySports =
        sports.map((sport, id) => (
            <button key={sport.id}>{sport.name}</button>
        ))
    ;

  return(
      <div className="sportsbar">
          {displaySports}
      </div>
  )
}
export default SportsBar;