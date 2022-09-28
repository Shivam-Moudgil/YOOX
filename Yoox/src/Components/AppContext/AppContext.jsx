import { useReducer } from "react";
import { createContext } from "react"
import reducer from "./reducer";



export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
    const initState = {
      country: [],
      loading:false
    };
    const [state, dispatch] = useReducer(reducer,initState);

    return (
            <AppContext.Provider value={{state,dispatch}}>
                {children}
        </AppContext.Provider>
    )
}