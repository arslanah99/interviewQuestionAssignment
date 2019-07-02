import React, { Component } from 'react';

class ImageSource extends Component {


render() {

    let urls = [
        'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg',
        'https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg'
    ]
    let images = urls.map(url => {
        return <img src={url}/>
    })
    return (
      <div className="App">
        <h1>TESTING</h1>
        {images}
      </div>
    );
  }
}

export default ImageSource;