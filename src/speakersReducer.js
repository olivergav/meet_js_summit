function updateFavorite(state, id, favorite) {

    return state.speakerList.map((speaker) => {
        if (speaker.id === id) {
            return {...speaker, favorite};
        }

        return speaker;
    })
}

function speakersReducer(state, action) {
    switch(action.type) {
        case 'SET_SPEAKER_LIST':
            return {...state, isLoading: false, speakerList: action.payload};
        case 'UNFAVORITE':
            return {...state, speakerList: updateFavorite(state, action.payload, false)};
        case 'FAVORITE':
            return {...state, speakerList: updateFavorite(state, action.payload, true)};
        default:
            return state
    }
}

export default speakersReducer;