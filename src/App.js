import React from 'react';
import ItemList from './ItemList'

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="container">
        <header>
          <span>header</span>
        </header>
        <main>
          <>
            <ItemList />
          </>
        </main>
        <footer>
          <span>footer</span>
        </footer>
      </div>
  )}
}

export default App;
