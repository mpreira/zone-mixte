import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Spinner = ({ classNames }) => {
  return (
    <div className={`flex items-center justify-center ${classNames}`}>
      <Loader
        type="Puff"
        color="#fe9f33"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
};

export default Spinner;
