import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./Reducers"

const entireAppStore = createStore(reducer, applyMiddleware(thunk, logger))

export default entireAppStore