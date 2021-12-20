import React from "react";

import "./RoomBadge.css";

export class RoomBadge extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div class="container-item" className="RoomBadge">
                <p> Building = {this.props.roomName}, Occupancy = {this.props.numPeople},
                Maximum Occupancy = {this.props.maxPeople}
                    </p>
            </div>
        );
    }
}