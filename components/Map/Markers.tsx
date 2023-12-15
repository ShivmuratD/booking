// import { DestinationcordiContext } from '@/context/DestinationCordiContext';
// import { SourceCordiContext } from '@/context/SourceCordiContext';
// import { UserLocationContext } from '@/context/UserLocationContext';
// import React, { useContext } from 'react'
// import { Map,Marker } from 'react-map-gl'

// function Markers() {
//     const {userLocation,setUserLocation}
//     =useContext(UserLocationContext);
  
//     const {soruceCordinates,setSourceCordinates}
//     =useContext(SourceCordiContext);
//     const {destinationCordinates,setDestinationCordinates}
//     =useContext(DestinationcordiContext);

//   return (
//     <div>
//         {/* User Marker  */}
//              {/* <Marker 
//                 longitude={userLocation?.lng} 
//                 latitude={userLocation?.lat} 
//                 anchor="bottom" >
//                  <img src="./pin.png" 
//                  className='w-10 h-10'
//                  />
//                 </Marker> */}

//                 {/* Source marker  */}
//              {soruceCordinates.length!=0? <Marker 
//                 longitude={soruceCordinates?.lng} 
//                 latitude={soruceCordinates?.lat} 
//                 anchor="bottom" >
                
                 
//                   <img src="./location.png" 
//                  className='w-10 h-10'
//                  />
                
                 
//                 </Marker>:null}


//                 {/* Destination Marker  */}

//                 {destinationCordinates.length!=0? <Marker 
//                 longitude={destinationCordinates?.lng} 
//                 latitude={destinationCordinates?.lat} 
//                 anchor="bottom" >
//                   <img src="./location.png" 
//                  className='w-10 h-10'
//                  />
//                 </Marker>:null}

//     </div>
//   )
// }

// export default Markers


import React, { useContext } from 'react';
import { Map, Marker } from 'react-map-gl';
import { DestinationCordiContext } from '@/context/DestinationCordiContext';
import { SourceCordiContext } from '@/context/SourceCordiContext';
import { UserLocationContext } from '@/context/UserLocationContext';

function Markers() {
  const { userLocation } = useContext(UserLocationContext);
  const { soruceCordinates } = useContext(SourceCordiContext);
  const { destinationCordinates } = useContext(DestinationCordiContext);

  return (
    <div>
      {/* User Marker */}
      {userLocation && (
        <Marker longitude={userLocation.lng} latitude={userLocation.lat} anchor="bottom">
          <img src="./pin.png" className="w-10 h-10" alt="User Marker" />
        </Marker>
      )}

      {/* Source marker */}
      {soruceCordinates.length !== 0 && (
        <Marker longitude={soruceCordinates[0].lng} latitude={soruceCordinates[0].lat} anchor="bottom">
          <img src="./location.png" className="w-10 h-10" alt="Source Marker" />
        </Marker>
      )}

      {/* Destination Marker */}
      {destinationCordinates.length !== 0 && destinationCordinates[0].lat && destinationCordinates[0].lng && (
  <Marker
    longitude={destinationCordinates[0].lng}
    latitude={destinationCordinates[0].lat}
    anchor="bottom"
  >
    <img src="./location.png" className="w-10 h-10" alt="Destination Marker" />
  </Marker>
)}
    </div>
  );
}

export default Markers;
