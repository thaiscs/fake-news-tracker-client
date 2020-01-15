import React, { Component } from "react";
import { connect } from "react-redux";
import image from "../../../src/news.png";

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
            // style={{ backgroundImage: "url(" + image + ")" }}
            style={{ backgroundColor: "#E9E9E9" }}
          >
            <img
              className="score-page-image"
              src={image}
              width="370"
              height="122"
              style={{
                float: "left",
                transform: "rotateZ(-25deg)",
                paddingTop: "55px"
              }}
              alt="fake-news"
            />
            <main className="score-details">
              <h1
                style={{
                  color: "black",
                  paddingTop: "70px",
                  paddingRight: "330px"
                }}
              >
                {" "}
                The Bullshit score{" "}
              </h1>
              <h1 style={{ display: "block", paddingRight: "330px" }}>
                {score.article.bullshitScore}%
              </h1>
              <h3
                className="score-range-color"
                style={{ backgroundColor: score.article.color }}
              >
                {score.article.range}
              </h3>
            </main>
            <h3>{score.article.emotion}</h3>
            <div className="what-to-check-for">
              <p style={{ fontStyle: "italic" }}>EXTRA</p>
              <ul>
                <p>
                  <span>&#10003;</span> FACTS: A trustworthy article is based on
                  a collection of facts and a logical progression of thought.
                </p>
                <p>
                  <span>&#10003;</span> SOURCES: Should include information such
                  as author name(s), publication, institution, title, page, and
                  web link if applicable.{" "}
                </p>
                <p>
                  <span>&#10003;</span> BIAS: Reliable journalism should include
                  at least two points of view or sides of the story.{" "}
                </p>
              </ul>
            </div>
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
