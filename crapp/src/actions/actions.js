import axios from "axios";

export const ON_SUCCESS = "ON_SUCCESS";
export const ON_FAIL = "ON_FAIL";
export const ON_REFRESH = "ON_REFRESH";


export const onChange = () => {
    return((dispatch) => {
        axios.get("https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
        .then(res => {
            dispatch({type: ON_SUCCESS, pay: res.data.title})
        })
        .catch(err => {
            dispatch({type: ON_FAIL, pay: err});
        })
    });
}

export const onSuccess = (title) => {
    return({
        type: ON_SUCCESS, payload: title
    });
}