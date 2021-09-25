import React from "react";
import { Link } from "react-router-dom";

const Unavailable = () => {
    return (
        <div className="flex flex-col items-center gap-4 mt-12">
            <h2>Cette page est uniquement accessible pour format mobile et tablette</h2>
            <Link to="/" className="button button-secondary">
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default Unavailable;
