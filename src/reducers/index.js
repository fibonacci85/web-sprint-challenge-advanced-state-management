
import {FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL} from '../actions/index'


export const initialState = {
    isFetching: false,
    smurf:[],
    newSmurf:{},
    error:""
}

export const reducer = (state = initialState, action)=>{
    switch(action.type) {
        case(FETCH_SMURF_START):
            return({
                ...state,
                isFetching: true,
            });
        case(FETCH_SMURF_SUCCESS):
            return({
                ...state,
                isFetching: false,
                smurf:action.payload,
               
            })
        case(FETCH_SMURF_FAIL):
            return({
                isFetching: false,
                error:action.payload
            });
        case(ADD_SMURF_START):
            return({
                ...state,
                isLoading:true
            });
        case(ADD_SMURF_SUCCESS):
            return({
                ...state,
                smurf:[...state.smurf, action.payload],
                isLoading: false
            })
        case(ADD_SMURF_FAIL):
            return({
                ...state,
                isLoading:false,
                error:action.payload
            })           
        default:
            return state
    }
};



//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary