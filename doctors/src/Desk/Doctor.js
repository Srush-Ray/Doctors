import React from "react";
import cross from '../Images/Vector.svg';

class Doctor extends React.Component{
    constructor(props) {
        super(props);

}

    render() {
        return (
            <div className="col-12">
                <button type="btn" className="closeButton"><img src={cross} alt="close" /></button> 
                <h1>{this.props.designation}
                </h1>
            </div>
        );
    }
}
export default Doctor;