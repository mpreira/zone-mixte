import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";

const GoBackButton = () => {

    let history = useHistory();

    return(
        <button
            className="mt-4 ml-4 text-gold flex"
            onClick={() => {history.goBack()}}
        >
                <span>
                    <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                    Retour
                </span>

        </button>
    )
}
export default GoBackButton;