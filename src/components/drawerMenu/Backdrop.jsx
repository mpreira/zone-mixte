import React, {useState} from "react";

const Backdrop = props => {

    const [backdropOpening, setBackdropOpening] = useState(null);
    const handleChange = () => {
        props.changeBackdrop(!props.openBackdrop);
    }

    return(
        <>
            <div className="backdrop" onClick={handleChange}></div>
        </>
    )

}
export default Backdrop;