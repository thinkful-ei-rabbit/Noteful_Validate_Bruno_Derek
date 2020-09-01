import React from 'react'
import Folder from '../components/Folder';

const SingleSidebar = ({ folder, history }) => {
  return (
    <div>
      <Folder
        name={folder.name}
        id={folder.id}
      />
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  );
}

export default SingleSidebar
