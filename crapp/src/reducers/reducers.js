import { ON_FAIL, ON_REFRESH, ON_SUCCESS } from "../actions/actions";

const initialState = {
    title: "",
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case (ON_SUCCESS):
          return ({
              ...state,
            title: action.pay
          })
        case (ON_FAIL):
            return({
                ...state, title: "error"
            })
        default:
            return state;
    }

}