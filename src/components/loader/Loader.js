import React from 'react';
import LoaderSpinner from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


const Loader = () => {
    return (
        <div className="d-flex flex-column align-items-center m-5">
            <LoaderSpinner
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs

            />
            <h1 className="h3">Getting Breweries...</h1>
        </div>
    );
}

export default Loader;