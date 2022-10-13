import {useCallback, useContext} from "react";
import Header from "./Header";
import Menu from "./Menu";
import {GlobalContext} from "./GlobalState";
import SpeakerDetail from "./SpeakerDetail";

function Speakers(){
    const {isLoading, speakerList, toggleSpeakerFavorite} = useContext(GlobalContext)

    if (isLoading) return <div>Loading...</div>

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const heartFavoriteHandler = useCallback(function (speaker) {
        toggleSpeakerFavorite(speaker)
    }, [])

    return (
        <>
            <Header />
            <Menu />

            <div className='container'>
                {speakerList.map((speaker) => (
                    <SpeakerDetail
                        speaker={speaker}
                        key={speaker.id}
                        heartFavoriteHandler={heartFavoriteHandler}
                    />
                ))}
            </div>
        </>
    )
}

export default Speakers;