import React, {useState} from "react";

//components
import Menu from "./Menu";

const DrawerMenu = props => {

    const [drawerOpening, setDrawerOpening] = useState(null);
    const handleChange = () => {
        props.changeDrawer(!props.openDrawer);
    }

    const [drawerClasses, setDrawerClasses] = useState(null);

    props.openDrawer? (setDrawerClasses("drawer-menu")) : (setDrawerClasses("drawer-menu"));

  return(
      <div className={drawerClasses}>
          <Menu />
      </div>
  )
}
export default DrawerMenu;