import React, {Component} from 'react';
import Table from "./components/table/Table";
import buildUrl from 'build-url';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const baseUrl = 'https://api.openbrewerydb.org'
const breweriesPerPage = 50
const getFromNumberOfPages = 2

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
  }

  componentDidMount() {
    this.getBreweries();
  }

  getBreweries = () => {

    let breweries = [];

    // for (let i = 1; i <= getFromNumberOfPages; i++) {
    //   fetch(this.createUrl(i, breweriesPerPage))
    //       .then(res => res.json())
    //       .then(data => breweries.push(data))
    //       .then(() => {
    //         if (i === getFromNumberOfPages - 1) {
    //           const allItems = breweries[0].concat(breweries[1])
    //           this.setState({
    //             breweries: [...allItems]
    //           })
    //         }
    //       })
    // }

    fetch(this.createUrl(1, breweriesPerPage))
        .then(res => res.json())
        .then(data => this.setState({breweries: data}))
  }

  createUrl = (pageNumber, itemsPerPage) => {
    const url = buildUrl(baseUrl, {
      path: 'breweries',
      queryParams: {
        page: pageNumber,
        per_page: itemsPerPage
      }
    })

    return url
  }


  render() {
    return (
        <div className="App container">
          <Table data={this.state.breweries} />
        </div>
    );
  }
}

export default App;
