import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'
import { Card, CardContent, Typography } from '@material-ui/core';
import './styles/Infobox.css';

function Infobox({title, cases, total, active, type, ...props}) {

    const InfoBoxCard = active ? `infoBox infoBox__${type}` : `infoBox`

    const theme = useContext(ThemeContext);
    console.log('Infobox Context', theme);


    return (
        <Card className={InfoBoxCard} onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color='textSecondary'>
                    {title}
                </Typography>
                <h2 className={`infoBox__header infoBox__header__${type}`}>{cases}</h2>
                <Typography className="infoBox__total" color='textSecondary'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default Infobox
