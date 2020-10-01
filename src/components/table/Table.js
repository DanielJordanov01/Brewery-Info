import React, {Component} from 'react';
import SortButton from "../sortButton/SortButton";

class Table extends Component {
    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">
                            Name
                            <SortButton />
                        </th>
                        <th scope="col">
                            Type
                            <SortButton />
                        </th>
                        <th scope="col">
                            State
                            <SortButton />
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.props.data.map((brewery) => <tr key={brewery['id']}>
                        <td>{brewery.name}</td>
                        <td>{brewery['brewery_type']}</td>
                        <td>{brewery.state}</td>
                    </tr>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;