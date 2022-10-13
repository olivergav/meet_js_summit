import Home from "../src/Home";
import Speakers from "./Speakers";
import {GlobalProvider} from "./GlobalState";

function pageToShow(pageName) {
    if (pageName === "Home") return (<Home/>);
    if (pageName === "Speakers") return (<Speakers/>);

    return (
        <div>Not found</div>
    )
}

function App({pageName}){
    return (
        <GlobalProvider>
            <>
                {pageToShow(pageName)}
            </>
        </GlobalProvider>
    )
}

export default App;