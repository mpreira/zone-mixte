import React, {useState} from "react";

//components
import {Informations, Preferences} from "./index";
import {Tabs} from "../common/index";

const Account = () => {

    const [state, setState] = useState({
        activeKey:1,
        tabs: [
            {name: 'informations', active: true, icon: 'userEdit', key: 1},
            {name: 'préférences', active: false, icon: 'userCog', key: 2},
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
      </div>
  )
}

export default Account;