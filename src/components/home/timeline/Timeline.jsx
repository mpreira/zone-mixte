import React from "react";

//components
import {Tlines} from "../index";

const Timeline = () => {
  return(
      <div className="timeline border-l-2 border-gray-200 2xl:w-96 w-72 p-8 my-8">
        <h2>Dernières infos</h2>

          <div className="timeline-container">
            <Tlines />
          </div>
      </div>
  )
}
export default Timeline;