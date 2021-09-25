import React, {useEffect, useState} from "react";
import {instance as axios} from "../../config/axiosConfig";
import {Link} from "react-router-dom";

const Categories = () => {

    const [sports, setSports] = useState([]);

    useEffect( () => {
        const fetchSports = async() => {
            await axios
                .get("/sports")
                .then((response) =>{
                    setSports(response.data);
                    console.log(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchSports();
    }, []);

    const displaySports =
        <div className="sports-grid">
            {sports.map((sport, i) => (
            <Link
                key={i}
                to={'#'}
                className="col-span-4 col-row-2 flex items-center justify-center bg-crimson py-2 px-3 text-white font-semibold rounded-2xl"
            >
                {sport.name}
            </Link>
            ))}
        </div>

    ;

  return(
      <div className="body min-h-screen h-auto">
          <h2>Catégories</h2>
          {displaySports}
      </div>
  )
}
export default Categories;