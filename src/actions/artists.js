export function loadArtistSearch(artists) {
  return function(dispatch, getState){
    dispatch({ type: "ARTIST_SEARCH", artists: artists})
  }
}
