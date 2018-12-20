// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//   state: (state = {}) => state
// });

// export default rootReducer;

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
