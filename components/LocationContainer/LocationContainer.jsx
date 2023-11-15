import { useMemo } from 'react';
// import Leaflet from '../Leaflet/Leaflet';
import dynamic from 'next/dynamic';

const LocationContainer = (props) => {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Location/Location'),
        {
            loading: () => <p>map is loading...</p>,
            ssr: false
        }
    ), [])

    return (

        <Map location={props.location} setLocation={props.setLocation} />

    );
}

export default LocationContainer;