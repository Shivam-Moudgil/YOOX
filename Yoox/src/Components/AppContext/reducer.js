
const reducer = (state, action) => {
    switch (action.type) {
      case "countrydata":
        return {...state, country: action.payload}
      case "loadingCountry":
        return {...state, loading: action.payload}
      default:
        return state;
    }
}

export default reducer