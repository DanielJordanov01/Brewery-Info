import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

import Table from "./components/table/Table";
import buildUrl from 'build-url';
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import BreweryDetails from "./components/breweryDetails/BreweryDetails";

const BASE_URL = 'https://api.openbrewerydb.org'
const PATH = 'breweries'
const BREWERIES_PER_PAGE = 50

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sortToggle: true,
            error: false,
            isWindowOpen: false,
            clickedBrewery: 0
        }
    }

    componentDidMount() {
        this.getBreweries();
    }

    getBreweries = () => {
        Promise.all([
            fetch(this.createUrl(1, BREWERIES_PER_PAGE)).then(value => value.json()),
            fetch(this.createUrl(2, BREWERIES_PER_PAGE)).then(value => value.json())
        ])
            .then((value) => {
                //json response
                let breweries = value[0].concat(value[1])
                this.setState({
                    breweries: breweries
                })
            })
            .catch((err) => {
                this.setState({
                    error: true
                })
                console.log(err);
            });
    }

    setSorted = (breweries) => {
        this.setState({
            breweries: breweries,
            isWindowOpen: false
        })
    }

    createUrl = (pageNumber, itemsPerPage) => {
        return buildUrl(BASE_URL, {
            path: PATH,
            queryParams: {
                page: pageNumber,
                per_page: itemsPerPage
            }
        })
    }

    getBreweryId = (id) => {
        this.setState({
            clickedBrewery: id,
            isWindowOpen: true
        })
    }

    closeWindow = () => {
        this.setState({
            isWindowOpen: false
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        else if (this.state.breweries.length <= 0) {
            return <Loader />
        } else {
            return (
                <div className="App container-lg mt-3">
                    <BreweryDetails isOpen={this.state.isWindowOpen} closeWindow={this.closeWindow} data={this.state.breweries[this.state.clickedBrewery]}/>
                    <Table data={this.state.breweries} setSorted={this.setSorted} getBreweryId={this.getBreweryId}/>
                </div>
            );
        }
    }
}

export default App;
