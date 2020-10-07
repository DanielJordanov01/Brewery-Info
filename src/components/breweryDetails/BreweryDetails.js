import React from 'react';
import {store} from "../../store";
import {setIsWindowOpen} from "../../actions";
import {Animated} from "react-animated-css";
import './BreweryDetails.css'

const BreweryDetails = () => {

    const id = store.getState().clickedBrewery
    const data = store.getState().breweries[id]

    return (
        <Animated className="position-fixed window" animationIn="zoomIn" animationOut="zoomOut" animationInDuration={500} animationOutDuration={500} isVisible={store.getState().isWindowOpen} animateOnMount={false}>
            <div className="window jumbotron mt-4 position-fixed border border-light rounded-top shadow p-3 mb-5 bg-white rounded">
                <h1 className="h1">{data.name}</h1>
                <p className="lead">{data['website_url']}</p>
                <hr />
                <p>Address: {data.street}, {data.city}, {data.state}</p>
                <p>Country: {data.country}</p>
                <p>Post Code: {data['postal_code']}</p>
                <p>Phone: {data.phone}</p>
                <p onClick={() => store.dispatch(setIsWindowOpen(false))} id="button" className="btn btn-dark btn-lg" role="button">Close</p>
            </div>
        </Animated>
    );
}

export default BreweryDetails;