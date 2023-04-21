import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const GET_FAVS = "GET_FAVS";

export const getFavs = () => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.get(endpoint).then((response) => {
            return dispatch({
                type: GET_FAVS,
                payload: response.data,
            });
        });
    };
}

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then((response) => {
            return dispatch({
                type: ADD_FAV,
                payload: response.data,
            });
        });
    };
};

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then((response) => {
            return dispatch({
                type: REMOVE_FAV,
                payload: response.data,
            });
        });
    };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender,
    }

}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order,
    }
}