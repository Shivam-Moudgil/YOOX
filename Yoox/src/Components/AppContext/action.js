export const Country = (value) => {
    return {
        type: "countrydata",
        payload:value
    }
}
export const Loading = (value) => {
    return {
        type: "loadingCountry",
        payload:value
    }
}