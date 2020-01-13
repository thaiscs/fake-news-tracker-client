import React, { Component } from "react";
import { connect } from "react-redux";
import { submitNewArticle } from "./actions";

class TextForm extends Component {
  state = {
    article: ""
  };

  handleChange = event => {
    console.log("getting input:", this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handelSubmit:");
    this.props.dispatch(submitNewArticle(this.state.article));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <textarea
              type="text"
              name="article"
              placeholder="paste article plain text"
              value={this.state.article}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default connect()(TextForm);
