import React, {useState} from "react";

const Informations = () => {

    const [data, setData] = useState({});

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    };

    const modifyInformations = () => {
        console.log('modifié');
        window.location.reload();
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log("sauvegardé")
    }

    return(
        <div className="lg:mt-24 lg:mb-0 md:my-24">
            <h3>Mes informations personnelles</h3>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    className="input mt-6"
                    onChange={handleChange}
                    value={data.username}
                    id="user-username"
                    placeholder="nom d'utilisateur"
                />

                <input
                    type="email"
                    className="input"
                    onChange={handleChange}
                    value={data.email}
                    id="user-email"
                    placeholder="adresse e-mail"
                />

                <input
                    type="password"
                    className="input"
                    onChange={handleChange}
                    value={data.password}
                    id="user-password"
                    placeholder="mot de passe"
                />

                <div className="md:mt-24 mt-6 flex justify-center">
                    <button
                        className="button button-primary mr-2"
                        onClick={modifyInformations}
                    >
                        Sauvegarder
                    </button>
                    <button
                        className="button button-secondary"
                    >
                        Réinitialiser
                    </button>
                </div>

            </form>
        </div>

    )
}
export default Informations;