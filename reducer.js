import { FETCH_RESULTS } from "./actions";
const initState = {
    results:[],
};
const rootReducer = (state=initState, action) =>{
    switch(action.type){
        case FETCH_RESULTS:
            return{
                ...state, results: action.payload,
            };
            default: return state;
    }
};
export default rootReducer;