import {useEffect, useReducer} from "react";
import speakersReducer from "../speakersReducer";
import axios from "axios";

function useSpeakerDataManager(){
    const [{isLoading, speakerList}, dispatch] = useReducer(speakersReducer, {
        isLoading: true,
        speakerList: []
    })

    useEffect(() => {
        const controller = new AbortController();

        getSpeakersData(controller)
            .catch(() => {});

        return () => {
            controller.abort();
        }
    }, [])

    async function toggleSpeakerFavorite(speaker) {
       await axios.put(`http://localhost:3001/speakers/${speaker.id}`, {
        ...speaker, favorite: !speaker.favorite
       })

        speaker.favorite === true
            ? dispatch({type: 'UNFAVORITE', payload: speaker.id})
            : dispatch({type: 'FAVORITE', payload: speaker.id})
    }

    async function getSpeakersData(abortController) {
        const response = await axios.get('http://localhost:3001/speakers', {
            signal: abortController.signal
        })

        dispatch({
            type: 'SET_SPEAKER_LIST',
            payload: response.data,
        })
    }

    return {isLoading, speakerList, toggleSpeakerFavorite};
}

export default useSpeakerDataManager;