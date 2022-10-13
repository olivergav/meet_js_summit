import {useCallback, useContext, useMemo, useState} from "react";
import Header from "./Header";
import Menu from "./Menu";
import {GlobalContext} from "./GlobalState";
import SpeakerDetail from "./SpeakerDetail";

function Speakers(){
    const {isLoading, speakerList, toggleSpeakerFavorite} = useContext(GlobalContext);
    const [speakersSaturday, setSpeakersSaturday] = useState(true);
    const [speakersSunday, setSpeakersSunday] = useState(true);

    const heartFavoriteHandler = useCallback(function (speaker) {
        toggleSpeakerFavorite(speaker)
    }, []);

    function handleChangeSaturday() {
        setSpeakersSaturday(!speakersSaturday)
    }

    function handleChangeSunday() {
        setSpeakersSunday(!speakersSunday)
    }

    const filteredSpeakerList =  useMemo(() => {
        return speakerList
            .filter(({sat, sun}) => (sat && speakersSaturday) || (sun && speakersSunday))
            .sort((a, b) => {
                if (a.firstName < b.firstName) {
                    return - 1;
                }

                if (a.firstName > b.firstName) {
                    return 1;
                }

                return 0;
            })
    }, [speakersSaturday, speakersSunday, speakerList])

    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <Header />
            <Menu />

            <div className='container'>
                <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
                    <div className="hide">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={speakersSaturday}
                                    onChange={handleChangeSaturday}
                                />
                                Saturday Speakers
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={speakersSunday}
                                    onChange={handleChangeSunday}
                                />
                                Sunday Speakers
                            </label>
                        </div>
                    </div>
                </div>

                <div className="speakers">
                    {filteredSpeakerList
                        .map((speaker) => (
                        <SpeakerDetail
                            speaker={speaker}
                            key={speaker.id}
                            heartFavoriteHandler={heartFavoriteHandler}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Speakers;