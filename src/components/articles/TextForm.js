import React, { Component } from "react";
import { connect } from "react-redux";
import { submitNewArticle } from "./actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import image from "../../../src/fake-news-road.jpg";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
    const theme = createMuiTheme({
      overrides: {
        MuiButton: {
          root: {
            background: "yellowgreen",
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
            alignItems: "center"
          }
        },
        MuiInputBase: {
          root: {
            background: "ghostwhite",
            padding: "20.5px 17px"
          }
        }
      }
    });
    return (
      <div
        className="main-page"
        style={{
          backgroundImage: "url(" + image + ")"
        }}
      >
        <form className="form" onSubmit={this.handleSubmit}>
          {/* <h2 style={{ color: "red" }}>FAKE ?</h2> */}
          <ThemeProvider theme={theme}>
            <TextField
              id="textfield"
              variant="outlined"
              type="text"
              name="article"
              placeholder="Paste article plain text"
              value={this.state.article}
              onChange={this.handleChange}
            />
            <Button onClick={this.handleSubmit} variant="outlined">
              Check
            </Button>
          </ThemeProvider>
        </form>
      </div>
    );
  }
}

export default connect()(TextForm);
