import React, { Component } from "react";
import { connect } from "react-redux";

class ScorePage extends Component {
  render() {
    const { score } = this.props;

    return (
      <div>
        <h1> Score Page </h1>
        <div>
          {score ? (
            <div>
              <p>{score.article.range}</p>
              <p>{score.article.emotion}</p>
              <p>{score.article.bullshitScore}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
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
