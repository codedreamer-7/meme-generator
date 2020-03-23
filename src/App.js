import React from 'react';
import './App.css';
import MainContent from './components/MainContent'

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
            <img alt="troll face" className="logo-img" src="troll-face-png.png"/>
            <div>
                <h1>Meme Generator</h1>
            </div>
        </header>
        <MainContent />
      </div>
    )
  }

}

export default App;
