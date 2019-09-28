import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./reducer/user"
import reduxThunk from "redux-thunk"

import goods from "./reducer/goods"

const reducer = combineReducers({
    user,
    goods
})

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;