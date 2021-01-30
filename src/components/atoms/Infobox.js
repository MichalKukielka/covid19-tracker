import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import { Typography } from '@material-ui/core';
import { StyledInfobox, Title, Total, AmountHeader, InfoboxContent } from './styled/Infobox';

function Infobox({title, cases, total, active, type, ...props}) {

    const currentTheme = useContext(ThemeContext);

    return (
        <StyledInfobox currentTheme={currentTheme} active={active} type={type} onClick={props.onClick}>
            <InfoboxContent currentTheme={currentTheme}>
                <Title currentTheme={currentTheme}>
                    {title}
                </Title>
                <AmountHeader active={active} type={type} >{cases}</AmountHeader>
                <Total currentTheme={currentTheme}>
                    {total} Total
                </Total>
            </InfoboxContent>
        </StyledInfobox>
    )
}

export default Infobox
