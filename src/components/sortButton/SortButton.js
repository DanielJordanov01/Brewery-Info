import React from 'react';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortButton = ({sort, column}) => {

    const handleOnClick = (event) => {
        sort(column)
    }

    return (
        <div className="d-inline">
            <FontAwesomeIcon onClick={handleOnClick} icon={faSort} className="ml-1" />
        </div>
    );
}

export default SortButton;