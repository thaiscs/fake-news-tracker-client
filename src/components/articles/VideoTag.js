import React, { Component } from "react";
import video from "../../../src/video-news.mp4";

class VideoTag extends Component {
  render() {
    return (
      <div>
        <video
          autoPlay
          muted
          loop
          preload="metadata"
          style={{
            position: "fixed",
            width: "100%",
            left: 0,
            top: 0
          }}
        >
          <source
            // src="https://ak0.picdn.net/shutterstock/videos/1030672070/preview/stock-footage-fake-news-glitch-text-animation-background-loop-k.mp4"
            src="https://ak3.picdn.net/shutterstock/videos/1014328643/preview/stock-footage-fake-news-text-animation-around-the-earth-rendering-background-loop-k.webm"
            type="video/mp4"
          />
        </video>
      </div>
    );
  }
}

export default VideoTag;
