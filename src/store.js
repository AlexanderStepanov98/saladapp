import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/saladReducer";

const preloadedlState = {
    isFetching: false,
    saladRequested: false
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedlState,
    applyMiddleware(...middleware)
);

export default store;