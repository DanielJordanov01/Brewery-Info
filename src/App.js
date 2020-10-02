import React, {Component} from 'react';
import Table from "./components/table/Table";
import buildUrl from 'build-url';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const BASE_URL = 'https://api.openbrewerydb.org'
const PATH = 'breweries'
const BREWERIES_PER_PAGE = 50

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breweries: [],
            sortToggler: true
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
                console.log(err);
            });
    }

    sort = (sortAttribute) => {
        let breweries = [...this.state.breweries]

        if (this.state.toggler) {
            breweries.sort((first, second) => this.compare(first[sortAttribute], second[sortAttribute]))
            this.setState({toggler: !this.state.toggler})
        } else {
            breweries.sort((first, second) => this.compare(second[sortAttribute], first[sortAttribute]))
            this.setState({toggler: !this.state.toggler})
        }

        this.setState({
            breweries: breweries
        })
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
        return (
            <div className="App container">
                <Table data={this.state.breweries} sort={this.sort}/>
            </div>
        );
    }
}

export default App;
