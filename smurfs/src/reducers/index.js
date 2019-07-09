import { GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, ADD_SMURF } from "../actions";

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

function rootReducer( state = initialState, action ) {
  console.log(state.smurfs)
  switch(action.type) {
    case GET_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
      case GET_SMURFS_SUCCESS:
        return {
          ...state,
          fetchingSmurfs: false,
          smurfs: action.payload,
          error: null,
        };
      case GET_SMURFS_FAIL:
        return {
          ...state,
          error: action.payload
        }
      case ADD_SMURF:
        return {
          ...state,
          smurfs: action.payload,
          addingSmurf: true,
        }
    default:
      return state;
  }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default rootReducer;
