import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { prettyPrintData } from '../utils/utils';
import { TableWrapper, TableRow, TableCell } from './styled/Table';

function Table({ countries, casesType }) {

    const theme = useContext(ThemeContext);

    return (
        <TableWrapper>
            {countries.map((country) => (
                <TableRow key={country.country}>
                    <TableCell>{country.country}</TableCell>
                    <TableCell><strong>{prettyPrintData(country[casesType])}</strong></TableCell>
                </TableRow>
            ))}
        </TableWrapper>
    )
}

export default Table
