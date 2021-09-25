import React from 'react';
import {Link} from "react-router-dom";

const NotFound =({history}) =>{
    return(
        <div className="body">
            <h2>404Page</h2>
            <Link to="/" className="">
                Retourner à l'accueil
            </Link>
        </div>
    )
}

export default NotFound;