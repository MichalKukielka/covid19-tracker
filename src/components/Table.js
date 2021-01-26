import React from 'react';
import './styles/Table.css';

function Table({ countries, casesType }) {
    return (
        <div className="table">
            {countries.map((country) => (
                <tr>
                    <td>{country.country}</td>
                    <td><strong>{country[casesType]}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
