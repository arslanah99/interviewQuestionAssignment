import React, { Component } from "react";
import "./App.css";
import Images from "./components/imageSource";
import ImageZoom from 'react-medium-image-zoom';


//Main app component where images are displayed
class App extends Component {
  render() {
    return (
      <div className="App">
        <Images />
      </div>
    );
  }
}

export default App;
