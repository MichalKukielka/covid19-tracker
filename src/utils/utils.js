import numeral from 'numeral';

export const chartOptions = {
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

export const sortObjectData = (data, key) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) => a[key] > b[key] ? -1 : 1)
}

export const prettyPrintData = (data) => {
    return data ? `+${numeral(data).format("0.0a")}` : "+0";
}

