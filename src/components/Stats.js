import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Infobox from './atoms/Infobox';
import { prettyPrintData } from '../utils/utils';

import './styles/App.css';

function Stats({countryInfo, casesType, setCasesType}) {

    const theme = useContext(ThemeContext);
    console.log('Stats Context', theme);

    return (
        <div className="app__stats">
            <Infobox
                title="Coronavirus Cases"
                type={"cases"}
                cases={prettyPrintData(countryInfo.todayCases)}
                total={prettyPrintData(countryInfo.cases)}
                onClick={(e) => setCasesType("cases")}
                active={casesType === 'cases'}
            />
            <Infobox
                title="Recoverd Cases"
                type={"recovered"}
                cases={prettyPrintData(countryInfo.todayRecovered)}
                total={prettyPrintData(countryInfo.recovered)}
                onClick={(e) => setCasesType("recovered")}
                active={casesType === 'recovered'}
            />
            <Infobox
                title="Death Cases"
                type={"deaths"}
                cases={prettyPrintData(countryInfo.todayDeaths)}
                total={prettyPrintData(countryInfo.deaths)}
                onClick={(e) => setCasesType("deaths")}
                active={casesType === 'deaths'}
            />
        </div>

    )
}

export default Stats
