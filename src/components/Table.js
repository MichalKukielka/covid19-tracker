import React, { Fragment, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { prettyPrintData } from '../utils/utils';
import { TableWrapper, TableHeader, TableRow, TableCell } from './styled/Table';

function Table({ countries, casesType }) {

    const currentTheme = useContext(ThemeContext);

    return (
        <Fragment>
            <TableHeader currentTheme={currentTheme}>Live Cases by Country</TableHeader>
            <TableWrapper currentTheme={currentTheme}>
                {countries.map((country) => (
                    <TableRow currentTheme={currentTheme} key={country.country}>
                        <TableCell>{country.country}</TableCell>
                        <TableCell><strong>{prettyPrintData(country[casesType])}</strong></TableCell>
                    </TableRow>
                ))}
            </TableWrapper>
        </Fragment>        
    )
}

export default Table
