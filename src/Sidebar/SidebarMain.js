import React from 'react'
import Folder from '../components/Folder'

const SidebarMain = (props) => {
  const folders = props.folders.map((folder, index) => {
    return <Folder key={index} folderName={folder.name} />
  })
  return (
    <div>
      {folders}
      <button>Add folder</button>
    </div>
  )
}

export default SidebarMain
