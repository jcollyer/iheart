import React from 'react'

export default(props) => {
  return (
    <div className="responsive">
      <span className="artist">{props.name}</span>
      <div className="image">
        <img alt={props.name} src={props.img} />
      </div>
    </div>
  )
}
