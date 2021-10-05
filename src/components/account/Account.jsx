import React, {useState} from "react";

//components
import {Informations, Preferences} from "./index";
import {Tabs} from "../common/index";
import {Link} from "react-router-dom";

const Account = () => {

    const [state, setState] = useState({
        activeKey:1,
        tabs: [
            {name: 'informations', active: true, icon: "user-edit", key: 1},
            {name: 'préférences', active: false, icon: "user-cog", key: 2},
            // {name: 'onglet 3', active: false, icon: 'user-secret', key: 3},
        ]
    })

    const changeKey = (key) => setState({ ...state, activeKey: key });

  return(
      <div className="account-body">

          <h2>Mon compte</h2>

          <Tabs
              tabs={state.tabs}
              activeKey={state.activeKey}
              changeKey={changeKey}
              classNames={"my-6"}
          />

          {state.activeKey === 1 ? (
              <Informations />
          ) : state.activeKey === 2 ? (
              <Preferences />
          ) : (
              <div></div>
          )}

          <div className={"flex justify-center"}>
              <Link
                  to={"/accueil"}
                  className={"button button-primary"}
              >
                  Retourner à l'accueil
              </Link>
          </div>

      </div>
  )
}

export default Account;