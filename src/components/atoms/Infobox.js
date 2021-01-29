import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import { CardContent, Typography } from '@material-ui/core';
import { StyledInfobox, Title, AmountHeader, InfoboxContent } from './styled/Infobox';

function Infobox({title, cases, total, active, type, ...props}) {

    const currentTheme = useContext(ThemeContext);

    return (
        <StyledInfobox currentTheme={currentTheme} active={active} type={type} onClick={props.onClick}>
            <InfoboxContent currentTheme={currentTheme}>
                <Title color='textSecondary'>
                    {title}
                </Title>
                <AmountHeader active={active} type={type} >{cases}</AmountHeader>
                <Typography color='textSecondary'>
                    {total} Total
                </Typography>
            </InfoboxContent>
        </StyledInfobox>
    )
}

export default Infobox
