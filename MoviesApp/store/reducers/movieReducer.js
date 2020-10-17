const INITIAL_STATE = {
    movieGenres: [],
}

const movieReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_MOVIE_GENRES":
            return {
                ...state,
                movieGenres: action.payload
            }
        default:
            return state;
    }
}

export default movieReducer;