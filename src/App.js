import Home from "../src/Home";
import Speakers from "./Speakers";
import {GlobalProvider} from "./GlobalState";
import {createContext} from "react";

function pageToShow(pageName) {
    if (pageName === "Home") return (<Home/>);
    if (pageName === "Speakers") return (<Speakers/>);

    return (
        <div>Not found</div>
    )
}

export const ConfigContext = createContext();

const configValue = {
    showSignMeUp: true,
    showSpeakerSpeakingDays: true,
};


function App({pageName}) {
    return (
        <ConfigContext.Provider  value={configValue}>
            <GlobalProvider>
                <>
                    {pageToShow(pageName)}
                </>
            </GlobalProvider>
        </ConfigContext.Provider >
    )
}

export default App;