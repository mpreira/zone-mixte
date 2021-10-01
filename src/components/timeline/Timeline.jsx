import React from "react";

//components
import {Tlines} from "../home/index";

const Timeline = () => {
    return(
        <div className="body">
            <h2>Dernières infos</h2>

            <div className="timeline w-full p-4 my-4 min-h-screen">
                <div className="timeline-container">
                    <Tlines />
                </div>
            </div>
        </div>
    )
}
export default Timeline;