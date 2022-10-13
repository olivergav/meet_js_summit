import {createContext} from "react";
import useSpeakerDataManager from "./hooks/useSpeakerDataManager";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const dataProvider = useSpeakerDataManager();

    return (
        <GlobalContext.Provider value={dataProvider}>
            {children}
        </GlobalContext.Provider>
    )
}