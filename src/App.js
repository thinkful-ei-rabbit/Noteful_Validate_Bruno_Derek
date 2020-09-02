import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Store from './dummyStore';
import Header from './Header/Header';
import Sidebar from './Nav/Sidebar';
import SingleSidebar from './Nav/SingleSidebar';
import MainNotes from './Main/MainNotes';
import SingleNote from './Main/SingleNote';


class App extends Component {
  state = {
    folders: Store.folders,
    notes: Store.notes
  }

  findNote(notes, noteId) {
    return notes.find(note => note.id === noteId)
  }

  findFolder(folders, folderId) {
    return folders.find(folder => folder.id === folderId)
  }

  getNotesForFolder(notes, folderId) {
    return !folderId ? notes : notes.filter(note => note.folderId === folderId)
  }

  sidebarRender() {
    const { notes, folders } = this.state;
    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            path={path}
            key={path}
            render={routeProps => (
              <Sidebar
                notes={notes}
                folders={folders}
                {...routeProps}
              />
            )}
          />
        ))}
        {<Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = this.findNote(notes, noteId) || {};
            const folder = this.findFolder(folders, note.folderId);
            return <SingleSidebar folder={folder} {...routeProps}/>
          }}
        />}
      </>
    )
  }

  mainRender() {
    const { notes, folders } = this.state;

    return(
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            path={path}
            key={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params;
              const notesForFolder = this.getNotesForFolder(notes, folderId);
              return <MainNotes {...routeProps} notes={notesForFolder} />
            }}
          />
        ))}
        {<Route
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params;
            const note = this.findNote(notes, noteId);
            return <SingleNote note={note} {...routeProps}/>
          }}
        />}
      </>
    )

  }

  render() {
    return (
      <div className='App'>
        <Header />
        <div className='app-body'>
          <nav>{this.sidebarRender()}</nav>
          <main>{this.mainRender()}</main>
        </div>
      </div>
    );
  }
}

export default App;