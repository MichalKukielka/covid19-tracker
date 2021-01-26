export const sortObjectData = (data, key) => {
    const sortedData = [...data]
    return sortedData.sort((a, b) => a[key] > b[key] ? -1 : 1)
}