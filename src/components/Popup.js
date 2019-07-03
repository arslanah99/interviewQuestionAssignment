import React, { Component } from "react";
import "./Image.css";

class Popup extends Component {
  render() {
    return (
      <div className="popupParent">
        <div className="popupImage">
          <button
            className="imageClosingButton"
            onClick={this.props.closePopup}
          >
            X
          </button>
          <img src={this.props.popImageUrl} />
        </div>
      </div>
    );
  }
}

export default Popup;
