import React, { Component } from 'react';
import './Image.css';
class ImageSource extends Component {

    constructor(props){
        super(props)
        this.state = {
            imageUrl: "", imageUrlsArray: [
                'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
                'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg',
                'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
                'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg',
                'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
                'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg',
                'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
                'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg',
                'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
                'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg',
                
            ]
        }
    }



handleLinkChange = (e) => {
    e.preventDefault()
    this.setState({
        imageUrl: e.target.value
    })
}

imageSubmitter = (e) => {
    e.preventDefault()
    let imageUrlsArray = this.state.imageUrlsArray.push(this.state.imageUrl)
    // console.log(this.state.imageUrlsArray.slice(-1)[0])

    this.setState({
        imageUrlsArray: imageUrlsArray
    })
 }



render() {
    //looping through array of images
    let imageUrlArray = this.state.imageUrlsArray
    console.log(imageUrlArray)
    let images = imageUrlArray.map(url => {
        return <img src={url}/>
    })
    //returning images
    return (
      <div className="App">
        <h1>Image Gallery</h1>
        <form onSubmit={this.imageSubmitter}>
            <input type="text" placeholder="Please insert image link" onChange={this.handleLinkChange}/>
            <button type="submit">Submit Image</button>
        </form>
        <div className="container">
            <div>
            {images}
            </div>
        </div>
      </div>
    );
  }
}

export default ImageSource;