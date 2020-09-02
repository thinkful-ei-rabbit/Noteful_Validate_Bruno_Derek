import React from 'react'
import { Link } from 'react-router-dom'

const Note = (props) => {



  return (
    <div>
      <Link to={`/note/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <p>{props.modified}</p>
    </div>
  )
}

export default Note
