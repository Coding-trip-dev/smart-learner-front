import React, { useState, useEffect } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';

class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }



    render() {
        return (
            <>
                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>
                </Map>
            </>
        )
    }
}
    

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA9gXmpTx7qFWp3zHSf4iiZHRO63xCWRKQ")
})(MapContainer)
