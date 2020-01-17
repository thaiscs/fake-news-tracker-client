import React, { Component } from "react";
import { connect } from "react-redux";
import MdBulb from "react-ionicons/lib/MdBulb";
import MdHome from "react-ionicons/lib/MdHome";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <MdHome
                style={{ float: "left", padding: "10px 10px 10px 10px" }}
                fontSize="60px"
                color="white"
              />
            </Link>
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
