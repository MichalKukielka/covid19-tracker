import React, { Fragment, useState, useEffect, useContext } from "react";
import { ThemeContext } from '../context/ThemeContext'
import { ChartWrapper, ChardTitle } from './styled/LineChart';
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#E984A2",
    rgb: "rgb(233, 132, 162)",
    half_op: "rgba(233, 132, 162, 0.5)",
    multiplier: 200,
  },
  recovered: {
    hex: "#B9CC95",
    rgb: "rgb(185, 204, 149)",
    half_op: "rgba(185, 204, 149, 0.5)",
    multiplier: 300,
  },
  deaths: {
    hex: "#A2DCEE",
    rgb: "rgb(162, 220, 238)",
    half_op: "rgba(162, 220, 238, 0.5)",
    multiplier: 1000,
  },
};

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          parser: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

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
            options={options}
          />
        )}
      </ChartWrapper>
    </Fragment>
  );
}

export default LineGraph;