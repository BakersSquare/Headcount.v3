import React from "react";

import {RoomBadgeList} from "./RoomBadgeList";
import { MapPane } from "./MapPane";
import { SignOutButton } from "./SignOutButton";


import "./SignInState.css";

export class SignInState extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="SignInState">
                <RoomBadgeList roomInfo={this.props.roomInfo}/>
                <MapPane/>
                <SignOutButton/>
            </div>
        );
    }
}
