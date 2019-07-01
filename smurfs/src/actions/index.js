import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAIL = 'GET_SMURFS_FAIL';

export const ADD_SMURF = 'ADD_SMURF';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });
    axios
      .get('http://localhost:3333/smurfs')
      .then( res => 
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
      )
      .catch( error => 
        dispatch({ type: GET_SMURFS_FAIL, payload: error })
      )
    };

export function addSmurf(smurf) {
  {console.log(smurf)}
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
     .post('http://localhost:3333/smurfs', smurf)
  }
}
