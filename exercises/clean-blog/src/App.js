import React, { Component } from 'react';
import Blog from './Blog'

class App extends Component {
  render() {
    const styles = {
      position: "relative",
      bottom: "70px"
    }
    return (
      <div style = {styles} >
        <Blog />
      </div>
    );
  }
}

export default App;
