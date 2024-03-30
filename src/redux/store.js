import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import postsReducer from "./reducers/postsReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
