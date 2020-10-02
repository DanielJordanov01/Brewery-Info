import React from 'react';
import SortButton from "../sortButton/SortButton";

const Table = ({data, sort, getBreweryId}) => {

    return (
        <div>
            <table className="table table-dark">
                <thead>
                <tr>
                    <th scope="col">
                        Name
                        <SortButton sort={sort} column="name"/>
                    </th>
                    <th scope="col">
                        Type
                        <SortButton sort={sort} column="brewery_type"/>
                    </th>
                    <th scope="col">
                        State
                        <SortButton sort={sort} column="state"/>
                    </th>
                </tr>
                </thead>
                <tbody>

                {data.map((brewery, index) =>
                    <tr onClick={() => getBreweryId(index)} key={index}>
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