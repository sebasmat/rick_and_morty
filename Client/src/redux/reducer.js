import { ADD_FAV, FILTER, REMOVE_FAV, ORDER, GET_FAVS } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVS:
            return {...state, myFavorites : action.payload}
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload }
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload }
        case FILTER:
            return { ...state, myFavorites: [...state.allCharacters.filter((character) => character.gender === action.payload)] }
        case ORDER:
            if (action.payload === 'A') {
                return { ...state, myFavorites: [...state.allCharacters].sort((a, b) => a.id - b.id) }
            } else if (action.payload === 'D') {
                return { ...state, myFavorites: [...state.allCharacters].sort((a, b) => b.id - a.id) }
            }
            break;
        default:
            return { ...state }
    }
}

export default rootReducer;