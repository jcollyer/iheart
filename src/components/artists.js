import React, { Component } from 'react'
import { connect } from 'react-redux'

class Artists extends Component {
  render() {
    const { artists } = this.props
    return (
      <p>
        {artists.map((artist,i)=>{
          return (
            <span key={i}>
              <li>{artist.name}</li>
              <img src={artist.image_url} />
            </span>
          )
        })}
      </p>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    artists: appState.artists.artists
  }
}

export default connect(mapStateToProps)(Artists)
