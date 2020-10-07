import React from 'react';
import {store} from "../../store";
import {setSelectedBreweryId} from "../../actions";
import {setIsWindowOpen} from "../../actions";
import SortButton from "../sortButton/SortButton";
import './Table.css'

const Table = ({data}) => {

    const displayDetails = (index) => {
        store.dispatch(setSelectedBreweryId(index, true))
        store.dispatch(setIsWindowOpen(true))
    }

    return (
        <div className="breweries-table">
            <table className="table table-dark">
                <thead>
                <tr>
                    <th data-test-id="name" scope="col">
                        Name
                        <SortButton column="name" breweries={data}/>
                    </th>
                    <th scope="col">
                        Type
                        <SortButton column="brewery_type" breweries={data}/>
                    </th>
                    <th scope="col">
                        State
                        <SortButton column="state" breweries={data}/>
                    </th>
                </tr>
                </thead>
                <tbody>

                {data.map((brewery, index) =>
                    <tr className="breweryRow" onClick={() => displayDetails(index)} key={index}>
                        <td>{brewery.name}</td>
                        <td>{brewery['brewery_type']}</td>
                        <td>{brewery.state}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );

}

export default Table;