import React from 'react';

const ErrorMessage = () => {
    return (
        <div className="d-flex flex-column align-items-center m-5">
            <h1 data-test-id="errorMessage" className="h3 font-weight-bold">There was a problem while getting breweries</h1>
        </div>
    );
}

export default ErrorMessage;