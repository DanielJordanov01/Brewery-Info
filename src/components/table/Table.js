import React from 'react';
import SortButton from "../sortButton/SortButton";
import './Table.css'

const Table = ({data, setSorted, getBreweryId}) => {

    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th data-test-id="name" scope="col">
                        Name
                        <SortButton setSorted={setSorted} column="name" breweries={data}/>
                    </th>
                    <th scope="col">
                        Type
                        <SortButton setSorted={setSorted} column="brewery_type" breweries={data}/>
                    </th>
                    <th scope="col">
                        State
                        <SortButton setSorted={setSorted} column="state" breweries={data}/>
                    </th>
                </tr>
                </thead>
                <tbody>

                {data.map((brewery, index) =>
                    <tr className="breweryRow" onClick={() => getBreweryId(index)} key={index}>
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