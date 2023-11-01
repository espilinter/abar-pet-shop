import React, { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
// import "../../../node_modules/leaflet/dist/leaflet.css";
import pin from "../../assets/image/pin.svg";
import DisplayPosition from "./DisplayPosition";
// import "./Location.css";
import SetViewOnClick from "./SetViewOnClick";
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Image from "next/image";

const Location = (props) => {
    const position = [35.723822, 51.407067];
    const animateRef = useRef(true);
    const [map, setMap] = useState(null);

    useEffect(() => {
        console.log(props.location);
    }, [props.location])

    const displayMap = useMemo(
        () => (
            <div className="relative advertise-leaflet">
                <Image
                    alt=""
                    src={pin}
                    className="absolute top-[calc(50%-50px)] left-[calc(50%-25px)] z-[500] w-[50px] h-[50px]"
                />
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={true}
                    ref={setMap}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <SetViewOnClick animateRef={animateRef} />
                </MapContainer>
            </div>
        ),
        []
    );

    return (
        <div>
            {map ? (
                <DisplayPosition
                    map={map}
                    location={props.location}
                    setLocation={props.setLocation}
                />
            ) : null}
            {displayMap}
        </div>
    );

    // return (
    //   <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    //     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    //     <Marker position={position} icon={customIcon} draggable={true}></Marker>
    //     <SetViewOnClick animateRef={animateRef} />
    //     <DisplayPosition />
    //   </MapContainer>
    // );
};

export default Location;
