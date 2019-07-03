import React, { Component } from "react";
import "./Image.css";
import Popup from './Popup.js'



class ImageSource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: "",
      imageUrlsArray: [
        "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg",
        "https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg",
        "https://images.unsplash.com/photo-1562077477-eb2409f73c49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1556909211-36987daf7b4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1562065540-efa93744ed71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1562060726-e47264af32bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1562033319-d3de4da461f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1554744512-5a8ef212982d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1562060726-1928f538a53f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      ],
      showModal: false,
      popImageUrl: ''
    };
  }

  handlePopup = (url) => {
      this.setState({
          showModal: !this.state.showModal,
          popImageUrl: url
    })
  }


  handleLinkChange = e => {
    e.preventDefault();
    this.setState({
      imageUrl: e.target.value
    });
  };

  imageSubmitter = e => {
    e.preventDefault();
    let imageUrlsArray = this.state.imageUrlsArray;
    imageUrlsArray.push(this.state.imageUrl);
    this.setState({
      imageUrlsArray: imageUrlsArray
    });
  };

  render() {
    //looping through array of images
    let imageUrlArray = this.state.imageUrlsArray;
    console.log(imageUrlArray);
    let images = imageUrlArray.map(url => {
      return <img  className="singleImage" src={url} onClick={() => this.handlePopup(url)}/>;
    });
    //returning images
    return (
      <div className="App">
        <h1>Image Gallery</h1>
        {/* input to create  */}
        <form onSubmit={this.imageSubmitter}>
          <input
            type="text"
            placeholder="Please insert image link"
            onChange={this.handleLinkChange}
          />
          <button type="submit" className="submitButton">Submit Image</button>
        </form>
        <div className="container">
          <div>{images}</div>{this.state.showModal ? 
          <Popup
            popImageUrl = {this.state.popImageUrl}
            closePopup = {this.handlePopup}            
          />
          : null
        }
        </div>
      </div>
    );
  }
}

export default ImageSource;
