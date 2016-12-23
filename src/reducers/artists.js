import { initialState } from '../api/initial-state'

export default (state = initialState.artistList, action) => {
  // debugger;
  switch(action.type){
    case "ARTIST_SEARCH":
      // debugger;
      return Object.assign({}, state, {
        artists: action.artists
      });
    default:
      return state;
  }
}
