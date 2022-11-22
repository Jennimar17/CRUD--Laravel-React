import React from 'react'

function Status(props) {
  const {type, text} = props  
  return (
    <span className={`badge text-bg-${type}`}>{text}</span>
  )
}

export default Status
