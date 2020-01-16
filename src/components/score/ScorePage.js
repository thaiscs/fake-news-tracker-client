import React, { Component } from "react";
import { connect } from "react-redux";
import MdBulb from "react-ionicons/lib/MdBulb";

class ScorePage extends Component {
  render() {
    const { score } = this.props;
    const spinner = (
      <img
        src="https://miro.medium.com/max/60/0*A4wJEoDWTjk6DGKG.?q=20"
        alt="spinner"
      />
    );

    return (
      <div>
        {score ? (
          <div
            className="score-page-background"
            style={{ backgroundColor: "black" }}
          >
            {/* <img
              className="idea-icon"
              src="https://cdn.dribbble.com/users/42577/screenshots/1470973/lightbulb.gif"
              width="370"
              height="122"
              style={{
                float: "left",
                transform: "rotateZ(-25deg)",
                paddingTop: "55px"
              }}
              alt="idea-icon"
            /> */}
            <h1
              className="bullshit-score-gradient"
              style={{
                paddingTop: "70px"
              }}
            >
              {" "}
              Bullshit Score{" "}
            </h1>
            <h1
              style={{
                color: "white",
                display: "block",
                paddingRight: "0px",
                fontSize: "3em",
                fontFamily: "monospace"
              }}
            >
              {score.article.bullshitScore}%
            </h1>
            <h3
              className="score-range-color"
              style={{ backgroundColor: score.article.color }}
            >
              {score.article.range}
            </h3>
            <h3 style={{ color: "ghostwhite", fontStyle: "italic" }}>
              {score.article.emotion}
            </h3>
            {/* <span className="hand-emoji" role="img" aria-label="hand">
              👉
            </span> */}

            <MdBulb shake={true} fontSize="60px" color="orange" />
            <h4 style={{ color: "#FF8C00" }}>{score.article.tipTitle}</h4>
            <h4 style={{ color: "#FF8C00" }}>{score.article.tipContent}</h4>
          </div>
        ) : (
          <p>{spinner}</p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.score
  };
}

export default connect(mapStateToProps)(ScorePage);
