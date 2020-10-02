import React, {Component} from 'react';
import './BreweryDetails.css'

const BreweryDetails = ({data}) => {

    if (data === undefined) {
        return null
    }

    return (
        <div className="jumbotron mt-4 position-fixed d-flex flex-column align-items-center border border-light rounded-top shadow p-3 mb-5 bg-white rounded">
            <h1 className="display-3">{data.name}</h1>
            <p className="lead">{data['website_url']}</p>
            <p>Address: {data.street}, {data.city}, {data.state}</p>
            <p>Country: {data.country}</p>
            <p>Post Code: {data['postal_code']}</p>
            <p>Phone: {data.phone}</p>
            <p className="lead mt-4">
                <a className="btn btn-dark btn-lg" href="#" role="button">Back</a>
            </p>
        </div>
    );
}

export default BreweryDetails;