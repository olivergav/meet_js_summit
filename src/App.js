import Home from "../pages";
import SignMeUp from "./SignMeUp";

function App({pageName}){
    if (pageName === "Home") return (<Home/>);
    if (pageName === "Speakers") return (<SignMeUp/>);
    return (
        <div>Not found</div>
    )
}

export default App;