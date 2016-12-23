import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadArtistSearch } from '../actions/artists'
import request from 'superagent'

class Search extends Component {
  search(evt){
    var that = this
    var string = document.getElementById("searchInput").value
    if(string != ""){
      const url = "http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords="+string+"&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US"
      request
        .get(url)
        .end((error, response) => {
          var artists = response.body.artists
          this.props.loadArtistSearch(artists)
        })
    }
  }
  render(){
    return (
      <form onSubmit={(e) => this.search(e)}>
        <input type="text" id="searchInput" />
        <button type="submit">Search</button>
      </form>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    string: ""
  }
}

export default connect(mapStateToProps, { loadArtistSearch })(Search)
