import React, { Component } from 'react'
import { connect } from 'react-redux'

export default(props) => {
  return (
    <form onSubmit={props.search}>
      <input type="text" id="searchInput" />
      <button type="submit">Search</button>
    </form>
  )
}
