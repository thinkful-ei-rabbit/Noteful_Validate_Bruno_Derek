import React from 'react'

const NoteForm = () => {
  return (
    <form id="add-note-form">
      <label htmlFor="noteName">Note Name: </label>
      <input type="text" name="noteName"/>
      <label htmlFor="folderName">Folder: </label>
      <input type="text" name="folderName"/>
      <label htmlFor="noteDesc">Description: </label>
      <input type="text" name='noteDesc'/>
    </form>
  )
}

export default NoteForm
