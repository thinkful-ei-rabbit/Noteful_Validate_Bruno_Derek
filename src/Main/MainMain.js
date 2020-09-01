import React from 'react'
import Note from '../components/Note';

const MainMain = ({ notes }) => {
  return (
    <section className='note-container'>
      {notes.map((note, idx) =>
        <Note
          key={idx}
          note={note}
        />
      )}
    </section>
  )
}

export default MainMain
