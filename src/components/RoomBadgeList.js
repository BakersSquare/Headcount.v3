import React from "react";
import { RoomBadge } from "./RoomBadge"

import "./RoomBadgeList.css";

export class RoomBadgeList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const roomArray = this.props.roomInfo;
        return (
                <div className="RoomBadgeList">
                    <div className="scrollbar scrollbar-danger">
                    <div className="force-overflow">
                         {roomArray && roomArray.map(room => <RoomBadge key={room.id} roomName={room.building} numPeople={room.people} maxPeople={room.maximumOccupancy}/>)}
                    </div>
                    </div>
                </div>
        );
    }
}