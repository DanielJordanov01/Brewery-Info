import React from 'react';
import {Animated} from "react-animated-css";
import './BreweryDetails.css'

const BreweryDetails = ({data, closeWindow, isOpen}) => {

    return (
        <Animated className="position-fixed window" animationIn="zoomIn" animationOut="zoomOut" animationInDuration={500} animationOutDuration={500} isVisible={isOpen} animateOnMount={false}>
            <div className="window jumbotron mt-4 position-fixed border border-light rounded-top shadow p-3 mb-5 bg-white rounded">
                <h1 className="h1">{data.name}</h1>
                <p className="lead">{data['website_url']}</p>
                <hr></hr>
                <p>Address: {data.street}, {data.city}, {data.state}</p>
                <p>Country: {data.country}</p>
                <p>Post Code: {data['postal_code']}</p>
                <p>Phone: {data.phone}</p>
                <p onClick={closeWindow} className="btn btn-dark btn-lg" role="button">Close</p>
            </div>
        </Animated>
    );
}

export default BreweryDetails;