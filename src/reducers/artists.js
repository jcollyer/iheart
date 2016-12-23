import { initialState } from '../api/initial-state'

export default (state = initialState.artistList, action) => {
  switch(action.type){
    case "ARTIST_SEARCH":
      return Object.assign({}, state, {
        artists: action.artists
      });
    default:
      return state;
  }
}
