import React from "react";

import {RoomBadgeList} from "./RoomBadgeList";
import { MapPane } from "./MapPane";
import { SignOutPane } from "./SignOutPane";


import "./SignInState.css";

export class SignInState extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        return (
            <div className="SignInState d-flex flex-row">
                    <RoomBadgeList className="col" roomInfo={this.props.roomInfo}/>
                    <MapPane className="col" />
                    <SignOutPane className="col" onClick={this.props.onClick}/>
            </div>
        );
    }
}
