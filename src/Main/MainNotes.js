import React from 'react';
import Note from '../components/Note';
import { Route } from 'react-router-dom';

const MainNotes = ({ notes }) => {
  return (
    <section className="note-container">
      {notes.map((note, idx) => {
        const id = note.id
        const name = note.name
        const modified = note.modified
        return (
          <Note
            key={idx}
            id={id}
            name={name}
            modified={modified}
          />
        )
      })}
    </section>
  );
};

export default MainNotes;
