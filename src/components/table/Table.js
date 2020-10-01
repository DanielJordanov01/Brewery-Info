import React, {Component} from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table className="table table-dark">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">State</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>

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