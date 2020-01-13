import React, { Component } from "react";
import { connect } from "react-redux";
import { submitNewArticle } from "./actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import image from "../../../src/fake-news-logo.png";

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
    this.props.dispatch(submitNewArticle(this.state.article));
    this.props.history.push("/score");
  };

  render() {
    return (
      <div className="main-page">
        {/* <header>
          <img
            id="fake-news-logo"
            src={image}
            alt="fake-news-logo"
            height="222"
            width="333"
          />
        </header> */}
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h2 style={{ color: "red", paddingTop: "100px" }}>Are you sure?</h2>
            <TextField
              id="textfield"
              variant="outlined"
              type="text"
              name="article"
              placeholder="paste article plain text"
              value={this.state.article}
              onChange={this.handleChange}
            />
            <Button variant="outlined">Check</Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(TextForm);
