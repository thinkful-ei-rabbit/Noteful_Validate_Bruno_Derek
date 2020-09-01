import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Store from './dummyStore';
import Header from './Header/Header';
import SidebarMain from './Sidebar/SidebarMain'
import MainMain from './Main/MainMain';


class App extends Component {
  state = {
    folders: Store.folders,
    notes: Store.notes
  }



  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <Header />
        <div className='app-body'>
          <SidebarMain folders={this.state.folders}/>
          <nav>
            {/* <Route path='/' component={SidebarMain} folders={this.state.folders}/>
            <Route path='/folder' component={SidebarFolder} />
            <Route path='/note' component={SidebarNote} /> */}
          </nav>

          <main>
            {/* <Route path='/' component={NoteMain} /> */}
            {/* <Route path='/folder' component={NoteFolder} /> */}
            {/* <Route path='/note' component={NoteNote} /> */}
          </main>
        </div>
      </div>
    );
  }
}

export default App;