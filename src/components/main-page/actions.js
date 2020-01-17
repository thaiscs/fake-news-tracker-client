import request from "superagent";
const url = "https://sleepy-lowlands-92044.herokuapp.com";

export function checkNewArticle(article) {
  return {
    type: "NEW_ARTICLE",
    payload: {
      article
    }
  };
}

export function submitNewArticle(text) {
  return function thunk(dispatch, getState) {
    request
      .post(`${url}/calculateScore`)
      .send({
        text: text
      })
      .then(response => {
        console.log("response?", response);
        const newArticle = JSON.parse(response.text);
        dispatch(checkNewArticle(newArticle));
      })
      .catch(err => console.log("err", err));
  };
}
