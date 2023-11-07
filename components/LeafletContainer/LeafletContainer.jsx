import { useMemo } from 'react';
// import Leaflet from '../Leaflet/Leaflet';
import dynamic from 'next/dynamic';

const LeafletContainer = (props) => {
    const Map = useMemo(() => dynamic(
        () => import('@/components/Leaflet/Leaflet'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    return (
        <>
            <Map location={props.location} />
        </>
    );
}

export default LeafletContainer;