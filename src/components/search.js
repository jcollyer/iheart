import React from 'react'
import { connect } from 'react-redux'

export default(props) => {
  return (
    <div className="search">
      <form>
        <label for="searchInput">SEARCH</label>
        <input type="text" name="searchInput" onKeyDown={props.search} />
      </form>
    </div>
  )
}
