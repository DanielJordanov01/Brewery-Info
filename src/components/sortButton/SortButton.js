import {faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './SortButton.css'
import React, {Component} from 'react';

class SortButton extends Component {
    state = {
        arrowToggle: true
    }

    sort = () => {
        let sortedBreweries = [...this.props.breweries]

        if (this.state.arrowToggle) {
            sortedBreweries.sort((first, second) => this.compare(first[this.props.column], second[this.props.column]))
            this.setState({arrowToggle: false})
        } else {
            sortedBreweries.sort((first, second) => this.compare(second[this.props.column], first[this.props.column]))
            this.setState({arrowToggle: true})
        }

        this.props.setSorted(sortedBreweries)

        return sortedBreweries
    }

    compare = (prev, next) => {
        if (prev === next) {
            return 0
        } else if (prev === null) {
            return 1
        } else if (next === null){
            return -1
        }
        else if (prev > next) {
            return 1
        } else {
            return -1
        }
    }

    render() {
        if (this.state.arrowToggle) {
            return (
                <div className="d-inline sortButton">
                    <FontAwesomeIcon data-test-id="arrowUp" onClick={this.sort} icon={faArrowUp} className="ml-1"/>
                </div>
            )
        } else {
            return (
                <div className="d-inline sortButton">
                    <FontAwesomeIcon data-test-id="arrowDown" onClick={this.sort} icon={faArrowDown} className="ml-1"/>
                </div>
            )
        }
    }
}

export default SortButton;
