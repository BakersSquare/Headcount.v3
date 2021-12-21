import React from "react";
import Card from "react-bootstrap/Card"
import ProgressBar from "react-bootstrap/ProgressBar"

import "./RoomBadge.css";


//Consider using badges/pills in the top right to indicate rooms that are getting full.
//label={`${curPeople}`} this line of code will give the count of the red bar
export class RoomBadge extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const curPeople = parseInt(this.props.numPeople);
        const maxPeople = parseInt(this.props.maxPeople);
        return (
            <div className="RoomBadge p-1">
                <Card style={{ width: '18rem' }} bg="dark"
                padding>
                    <Card.Body>
                        <Card.Title className="mb-2 text-light">{this.props.roomName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Occupancy = {curPeople}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">Maximum Occupancy = {maxPeople}</Card.Subtitle>
                        <ProgressBar>
                            <ProgressBar variant="danger" now={curPeople} key={1} />
                            <ProgressBar variant="success" now={maxPeople-curPeople} key={2} />
                        </ProgressBar>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

