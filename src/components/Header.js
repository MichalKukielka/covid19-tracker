import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { MenuItem } from '@material-ui/core';
import { ThemeSwitch } from './atoms/ThemeSwitch.js'
import { HeaderWrapper, AppTitle, SelectWrapper, ThemeSwitchWrapper, StyledSelect, ControlsWrapper } from './styled/Header';



function Header({ countries, onCountryChange, country, darkMode, setDarkMode }) {

    const theme = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <AppTitle>Covid19-Tracker</AppTitle>
            <ControlsWrapper>
            <SelectWrapper>
                <StyledSelect
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
                </StyledSelect>
            </SelectWrapper>
            <ThemeSwitchWrapper>
                <ThemeSwitch
                    checked={darkMode}
                    onChange={() => setDarkMode(prevState => !prevState)}
                />
            </ThemeSwitchWrapper>
            </ControlsWrapper>
        </HeaderWrapper>
    )
}

export default Header
