import React from 'react';
import { prettyPrintData } from '../util';
import './styles/Table.css';

function Table({ countries, casesType }) {
    return (
        <div className="table">
            {countries.map((country) => (
                <tr>
                    <td>{country.country}</td>
                    <td><strong>{prettyPrintData(country[casesType])}</strong></td>
                </tr>
            ))}
        </div>
    )
}

export default Table
