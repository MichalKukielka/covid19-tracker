import numeral from 'numeral';

export const sortObjectData = (data, key) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) => a[key] > b[key] ? -1 : 1)
}

export const prettyPrintData = (data) => {
    return data ? `+${numeral(data).format("0.0a")}` : "+0";
}