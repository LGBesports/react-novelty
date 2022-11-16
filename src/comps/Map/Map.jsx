
import { useRef } from 'react'
// import { GoogleMap } from '@react-google-maps/api'
// import './Map.scss'
// const containerStyle = {
//     width: '100%',
//     height: '100%'
// };



// const Map = ({center}) => {
//     const mapRef = useRef(undefined)
//     const onLoad = React.useCallback(function callback(map) {
//         mapRef.current = map
//     }, [])

//     const onUnmount = React.useCallback(function callback(map) {
//         mapRef.current = undefined;
//     }, [])
//     return (
//         <div className='contacts__map'>
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//                 onLoad={onLoad}
//                 onUnmount={onUnmount}
//             >

//             </GoogleMap>
//         </div>
//     )
// }

// export  {Map} 
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCXj0elAnbz1FLD9PijlYsFakhyPaXa7vM"
    })

    
    const mapRef = useRef(undefined)
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)