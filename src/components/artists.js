import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './search'
import { loadArtistSearch } from '../actions/artists'
import request from 'superagent'

class Artists extends Component {
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
  render() {
    const { artists } = this.props
    return (
      <span>
        <Search search={(e) => this.search(e)} />
        {artists.map((artist,i)=>{
          const imgUrl = "http://iscale.iheart.com/catalog/artist/" + artist.artistId + "?ops=fit(250,0)"
          return (
            <span key={i}>
              <li>{artist.artistName}</li>
              <img src={imgUrl} />
            </span>
          )
        })}
      </span>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    artists: appState.artists.artists
  }
}

export default connect(mapStateToProps, { loadArtistSearch })(Artists)
