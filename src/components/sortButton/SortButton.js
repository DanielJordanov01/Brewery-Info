import React, {Component} from 'react';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortButton = () => {
    return (
        <div className="d-inline">
            <FontAwesomeIcon icon={faSort} className="ml-1" />
        </div>
    );
}

export default SortButton;