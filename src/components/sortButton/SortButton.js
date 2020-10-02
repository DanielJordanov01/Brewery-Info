import React, {useState} from 'react';
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SortButton = ({sort, column}) => {

    const [arrowToggle, setToggle] = useState(true);

    const handleOnClick = () => {
        sort(column)
        setToggle(!arrowToggle)
    }

    if (arrowToggle) {
        return (
                <div className="d-inline">
                    <FontAwesomeIcon onClick={handleOnClick} icon={faArrowUp} className="ml-1" />
                </div>
            )
    } else {
        return (
                <div className="d-inline">
                    <FontAwesomeIcon onClick={handleOnClick} icon={faArrowDown} className="ml-1" />
                </div>
            )
    }
}

export default SortButton;