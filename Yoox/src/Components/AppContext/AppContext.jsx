import { useReducer, useState } from "react";
import { createContext } from "react"
import { AllProductsData } from "../Data/designer";
import reducer from "./reducer";



export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const initState = {
    country: [],
    loading: false,
    new: false,
    designers: false,
    clothing: false,
    shoes: false,
    accessories: false,
    men: { AllProductsData }
  };
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state.men.AllProductsData.menData)
  const [colored, setColored] = useState();

    return (
            <AppContext.Provider value={{state,dispatch,colored,setColored}}>
                {children}
        </AppContext.Provider>
    )
}