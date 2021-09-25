import React, {useEffect, useState} from "react";
import {instance as axios} from "../../config/axiosConfig";

const Categories = () => {

    const [sports, setSports] = useState({});

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

  return(
      <>
          <h2>Catégories</h2>

          {sports.map((sport, i) => (
              <div key={i}>{sport.name}</div>
          ))}
      </>
  )
}
export default Categories;