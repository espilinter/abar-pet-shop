import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

function DisplayPosition(props) {
  const { map } = props
  const [position, setPosition] = useState(() => map.getCenter());

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
    let mapLocation = `${position.lat.toFixed(6)},${position.lng.toFixed(6)}`;
    props.setLocation(mapLocation)
  }, [map, position.lat, position.lng]);

  useEffect(() => {
    map.on("move", onMove);

    return () => {
      map.off("move", onMove);
    };
  }, [map, onMove]);
}

export default DisplayPosition;
