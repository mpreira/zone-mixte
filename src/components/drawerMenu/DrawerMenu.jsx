import React from "react";

//components
import Menu from "./Menu";

class DrawerMenu extends React.Component {
    constructor(props){
        super(props);

        this.state={
            drawerOpening:'',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.changeDrawer(!this.props.openDrawer)
    }

    render() {

        let drawerClasses = "drawer-menu";

        if(this.props.openDrawer){
            drawerClasses = "drawer-menu open";
        }

        return (
            <div className={drawerClasses}>
                <Menu />
            </div>
        );
    }
}
export default DrawerMenu;
