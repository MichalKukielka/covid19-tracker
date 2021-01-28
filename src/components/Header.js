import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { ThemeSwitch } from './atoms/ThemeSwitch.js'

import './styles/App.css';

function Header({ countries, onCountryChange, country, darkMode, setDarkMode }) {

    const theme = useContext(ThemeContext);
    console.log('Header Context', theme);


    return (
        <div className="app__header">
            <h1>Covid19-Tracker</h1>
            <div className="app__select">
                <FormControl>
                    <Select
                        className="app__dropdown"
                        variant="outlined"
                        value={country}
                        onChange={onCountryChange}
                    >
                        <MenuItem key="worldwide" value="worldwide">
                            Worldwide
                        </MenuItem>
                        {/* Loop through countries */}
                        {countries.map(country => (
                            <MenuItem key={country.name} value={country.value}>
                                {country.name}
                            </MenuItem>
                        ))}

                    </Select>
                </FormControl>
            </div>
            <div>
                <ThemeSwitch
                    checked={darkMode}
                    onChange={() => setDarkMode(prevState => !prevState)}
                />
            </div>
        </div>

    )
}

export default Header
