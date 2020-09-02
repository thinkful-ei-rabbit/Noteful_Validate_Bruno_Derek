import React from 'react'
import Folder from '../components/Folder'

const Sidebar = (props) => {

  const folders = props.folders.map((folder, index) => {
    return (
      <Folder
        key={index}
        name={folder.name}
        id={folder.id}
      />
    )
  })

  return (
    <div>
      {folders}
      <button>Add folder</button>
    </div>
  )
}

export default Sidebar
