import React from 'react'

function Image(props) {
  return (
    <div>
    <img className='image' src={props.address} />
    </div>
  )
}

export default Image