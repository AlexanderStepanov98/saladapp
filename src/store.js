import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/saladReducer";

const preloadedState = {
    isFetching: false,
    saladRequested: false
};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware)
);

export default store;