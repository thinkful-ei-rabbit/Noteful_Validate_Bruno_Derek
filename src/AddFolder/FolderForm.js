import React from 'react';
import StateContext from '../StateContext'

const FolderForm = () => {
  let userInput = '';


  function handleSubmit() {
    if(userInput.length !== 0){
      this.context.clickAddFolder(userInput);
    }
    else{
      console.log('invalid name')
    }
  }

  const updateInput = (e) => {
    userInput = e.target.value
  }

  return(
    <StateContext.Consumer>
      <form id="add-folder-form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="folderName">Folder Name:</label>
        <input type="text" name="folderName" onChange={(e) => updateInput(e)}/>
        <button type="submit">Add folder</button>
      </form>
    </StateContext.Consumer>
  )
}