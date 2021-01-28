import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { prettyPrintData } from '../utils/utils';
import './styles/Table.css';

function Table({ countries, casesType }) {

    const theme = useContext(ThemeContext);
    console.log('TackerMap Context', theme);

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
