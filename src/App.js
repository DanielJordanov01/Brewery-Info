import React, {Component} from 'react';
import {store} from "./store";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

// Actions
import {setBreweries} from './actions/index'
import {setError} from "./actions/index";

// Components
import Table from "./components/table/Table";
import buildUrl from 'build-url';
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import BreweryDetails from "./components/breweryDetails/BreweryDetails";

// Global Variables
const BASE_URL = 'https://api.openbrewerydb.org'
const PATH = 'breweries'
const BREWERIES_PER_PAGE = 50

class App extends Component {

    componentDidMount() {
        this.getBreweries();
    }

    getBreweries = () => {
        Promise.all([
            fetch(this.createUrl(1, BREWERIES_PER_PAGE)).then(value => value.json()),
            fetch(this.createUrl(2, BREWERIES_PER_PAGE)).then(value => value.json())
        ])
            .then((value) => {
                // merge the two responses into one array and add to store
                let breweries = value[0].concat(value[1])
                store.dispatch(setBreweries(breweries))

            })
            .catch((err) => {
                store.dispatch(setError(true))
                console.log(err);
            });
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

    render() {
        if (store.getState().error) {
            return <ErrorMessage />
        }
        else if (store.getState().breweries.length <= 0) {
            return <Loader />
        } else {
            return (
                <div className="App container-lg mt-3">
                    <BreweryDetails />
                    <Table data={store.getState().breweries}/>
                </div>
            );
        }
    }
}

export default App;
