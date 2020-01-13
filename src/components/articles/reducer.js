export default function newArticleReducer(state = null, action = {}) {
  switch (action.type) {
    case "NEW_ARTICLE": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
