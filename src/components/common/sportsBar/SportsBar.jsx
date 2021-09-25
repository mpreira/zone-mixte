import React from "react";

const SportsBar = () => {

    const sports = [
        {id: 1, name: 'Football'},
        {id:2, name: 'Rugby'},
        {id:3, name: 'Basketball'},
        {id:4, name: 'Tennis'},
        {id:5, name: 'Handball'},
        {id:6, name: 'Judo'},
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