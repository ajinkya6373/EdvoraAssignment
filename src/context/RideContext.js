import { createContext,useContext,useReducer} from "react";
import RideReducer from "./RideReducer"
const INTIAL_STATE ={
    user :null,
    allRides:[],
    nearestRides:[],
    upcomingRides:[],
    pastRides:[],
}

export const RideContext = createContext();

export const RideContextProvider =({children}) =>{
    return (
        <RideContext.Provider value={useReducer(RideReducer,INTIAL_STATE)} >
            {children}
        </RideContext.Provider>
    )
}

export const useStateValue = ()=> useContext(RideContext)