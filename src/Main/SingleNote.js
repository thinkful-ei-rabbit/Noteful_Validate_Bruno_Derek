import React from 'react'
import Note from '../components/Note'

const SingleNote = ({ note }) => {
  const id = note.id
  const name = note.name
  const modified = note.modified
  return (
    <div>
      <Note
        id={id}
        name={name}
        modified={modified}
      />
      <p>{note.content}</p>
    </div>
  )
}

export default SingleNote
