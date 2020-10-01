import React, {Component} from 'react';
import Table from "./components/table/Table";
import buildUrl from 'build-url';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const baseUrl = 'https://api.openbrewerydb.org'
const breweriesPerPage = 50

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

    let breweries = []

    Promise.all([
      fetch(this.createUrl(1, breweriesPerPage)).then(value => value.json()),
      fetch(this.createUrl(2, breweriesPerPage)).then(value => value.json())
    ])
        .then((value) => {
          //json response
          breweries = value[0].concat(value[1])
          this.setState({
            breweries: breweries
          })
        })
        .catch((err) => {
          console.log(err);
        });


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
