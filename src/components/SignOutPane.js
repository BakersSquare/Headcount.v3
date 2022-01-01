import React from "react";

import "./SignOutPane.css";

export class SignOutPane extends React.Component {
    constructor(props){
        super(props);
    }
    render(props) {
        return (
            <div className="SignOutPane">
                <button className = "SignOut btn btn-danger btn-lg" onClick={this.props.onClick}>Sign Out</button>
            </div>
        );
    }
}