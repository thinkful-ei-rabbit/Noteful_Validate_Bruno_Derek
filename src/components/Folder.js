import React from 'react'
import { Link } from 'react-router-dom'

const Folder = (props) => {

  let id = props.id
  let name = props.name

  return (
    <Link to={`/folder/${id}`}>
      <p>{name}</p>
    </Link>
  )
}

export default Folder