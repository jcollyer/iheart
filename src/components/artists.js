import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from './search'

class Artists extends Component {
  render() {
    const { artists } = this.props
    return (
      <span>
        <Search />
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
  // debugger;
  return {
    artists: appState.artists.artists
  }
}

export default connect(mapStateToProps)(Artists)
