import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'
import { CardContent, Typography } from '@material-ui/core';
import { StyledInfobox, Title, AmountHeader } from './styled/Infobox';

function Infobox({title, cases, total, active, type, ...props}) {

    const theme = useContext(ThemeContext);

    return (
        <StyledInfobox active={active} type={type} onClick={props.onClick}>
            <CardContent>
                <Title color='textSecondary'>
                    {title}
                </Title>
                <AmountHeader active={active} type={type} >{cases}</AmountHeader>
                <Typography color='textSecondary'>
                    {total} Total
                </Typography>
            </CardContent>
        </StyledInfobox>
    )
}

export default Infobox
