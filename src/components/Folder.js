import React from 'react'

const Folder = (props) => {
  let folderName = props.folderName
  return (
    <div>
      <p>{folderName}</p>
    </div>
  )
}

export default Folder