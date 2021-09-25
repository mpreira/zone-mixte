import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="body">
      <h2>Vous n'avez pas les autorisations requises pour cette page</h2>
      <Link to="/" className="">
        Retourner à l'accueil
      </Link>
    </div>
  );
};

export default Unauthorized;
