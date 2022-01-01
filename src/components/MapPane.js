import React from "react";
import map from "../map.png";
import Image from 'react-bootstrap/Image';

/* import { MonitorBank } from "./MonitorBank";
import { MapRegion } from "./MapRegion";
import { ConfigRegion } from "./ConfigRegion"; */
import "./MapPane.css";

export class MapPane extends React.Component {
    render() {
        return (
            <div className="MapPane p-1 center">
                <Image src = {map} fluid />
            </div>
        );
    }
}