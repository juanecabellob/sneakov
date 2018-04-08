import React, { Component } from 'react';
import './App.css';
import corpus from './corpus.js'

const newWord = () => corpus[Math.round(Math.random() * 1000)]

class App extends Component {
  constructor() {
    super();
    this.state = {
      right: newWord(),
      left: newWord()
    }
  }

  pickRandomWord(box, e) {
    this.setState({
      [box]: newWord()
    });
  }

  render() {
    console.log(corpus)
    return (
      <div className="App">
        <div className="App-header">
          <p className="App-title">Sneak OV</p>
        </div>
        <div className="App-word-box-container">
          <div className="App-word-box" onClick={this.pickRandomWord.bind(this, 'left')} style={{backgroundColor: '#79eae3'}}>
            { this.state.left }
          </div>
          <div className="App-word-box" onClick={this.pickRandomWord.bind(this, 'right')} style={{backgroundColor: '#ffe69b'}}>
            { this.state.right }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
