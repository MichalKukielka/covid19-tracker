import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ThemeSwitch } from './atoms/ThemeSwitch.js'
import { HeaderWrapper, AppTitle, SelectWrapper, ThemeSwitchWrapper, StyledSelect, StyledMenuItem, ControlsWrapper, StyledIcon } from './styled/Header';
import { faMoon } from '@fortawesome/free-solid-svg-icons'

function Header({ countries, onCountryChange, country, darkMode, setDarkMode }) {

    const currentTheme = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <AppTitle currentTheme={currentTheme}>Covid19-Tracker</AppTitle>
            <ControlsWrapper>
                <SelectWrapper>
                    <StyledSelect
                        currentTheme={currentTheme}
                        variant="outlined"
                        value={country}
                        onChange={onCountryChange}
                        darkMode={darkMode}
                    >
                        <StyledMenuItem currentTheme={currentTheme} key={0} value="worldwide">
                            Worldwide
                        </StyledMenuItem>
                        {/* Loop through countries */}
                        {countries.map((country, index) => (
                            <StyledMenuItem currentTheme={currentTheme} key={index+1} value={country.value}>
                                {country.name}
                            </StyledMenuItem>
                        ))}
                    </StyledSelect>
                </SelectWrapper>
                <ThemeSwitchWrapper>
                    <ThemeSwitch
                        checked={darkMode}
                        onChange={() => setDarkMode(prevState => !prevState)}
                    />
                    <StyledIcon icon={faMoon} color={darkMode ? `#fabd2f` : `#A5A5A5`} />
                </ThemeSwitchWrapper>
            </ControlsWrapper>
        </HeaderWrapper>
    )
}

export default Header
