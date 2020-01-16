import React, { Component } from "react";
import { connect } from "react-redux";
import { submitNewArticle } from "./actions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import VideoTag from "./VideoTag";

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
        MuiCssBaseline: {
          // Name of the rule
          "@global": {
            "*, *::before, *::after": {
              transition: "none !important",
              animation: "none !important"
            }
          }
        },
        MuiButton: {
          root: {
            background: "white",
            display: "flex",
            flexDirection: "column",
            marginTop: "8px",
            alignItems: "center"
          },
          transitions: {
            // So we have `transition: none;` everywhere
            create: () => "none"
          }
        },
        MuiInputBase: {
          root: {
            background: "rgba(255, 255, 255, 0.95)"
          }
        },
        MuiOutlinedInput: {
          multiline: {
            // padding: "18.5px 250px",
            borderRadius: "10px"
          }
        }
      }
    });
    return (
      <div className="main-page">
        <VideoTag />
        <div className="form">
          <ThemeProvider theme={theme}>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              rows="5"
              fullWidth={true}
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
        </div>
      </div>
    );
  }
}

export default connect()(TextForm);
