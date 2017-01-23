import {GoogleMapLoader, GoogleMap} from "react-google-maps";
import React from 'react';


export default function CityMap (props) {
  return (    
      <GoogleMapLoader
        containerElement={
          <div
            {...props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={11}
            defaultCenter={{ lat: props.lat, lng: props.lon }}   
          />         
        }
      />
  );
}