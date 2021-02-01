import React, { Fragment, useState, useEffect, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'
import { chartOptions } from '../utils/utils';
import { casesTypeColors } from '../utils/theme';
import { ChartWrapper, ChardTitle } from './styled/LineChart';
import { Line } from "react-chartjs-2";

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function LineGraph({ casesType }) {
  const [data, setData] = useState({});

  const currentTheme = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, casesType);
          setData(chartData);
        });
    };

    fetchData();
  }, [casesType]);

  return (
    <Fragment>
      <ChardTitle currentTheme={currentTheme}>Worldwide new {casesType}</ChardTitle>
      <ChartWrapper>
        {data?.length > 0 && (
          <Line
            data={{
              datasets: [
                {
                  backgroundColor: casesTypeColors[casesType].half_op,
                  borderColor: casesTypeColors[casesType].hex,
                  data: data,
                },
              ],
            }}
            options={chartOptions}
          />
        )}
      </ChartWrapper>
    </Fragment>
  );
}

export default LineGraph;