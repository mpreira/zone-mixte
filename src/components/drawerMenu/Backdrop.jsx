import React from "react";

class Backdrop extends React.Component {
    constructor(props){
        super(props);

        this.state={
            backdropOpening:'',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        this.props.changeBackdrop(!this.props.openBackdrop)
    }

    render() {
        return (
            <div className="backdrop" onClick={this.handleChange}></div>
        );
    }
}

export default Backdrop;