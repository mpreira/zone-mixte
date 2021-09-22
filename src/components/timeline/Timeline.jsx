import React from "react";

//components
import Tlines from "./Tlines";

const Timeline = () => {
  return(
      <div className="timeline">
        <h2>Dernières infos</h2>

          <div className="timeline-container">
            <Tlines />
          </div>
      </div>
  )
}
export default Timeline;