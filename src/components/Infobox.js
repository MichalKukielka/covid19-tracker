import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './styles/Infobox.css';

function Infobox({title, cases, total, active, ...props}) {
    return (
        <Card className="infoBox" onClick={props.onClick}>
            <CardContent>
                <Typography className="infoBox__title" color='textSecondary'>
                    {title}
                </Typography>
                <h2 className="infoBox__cases">{cases}</h2>
                <Typography className="infoBox__total" color='textSecondary'>
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default Infobox
