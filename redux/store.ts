import { createStore, combineReducers } from "redux"

import { userReducer } from "./reducers/userReducer"

const rootReducer = combineReducers({ user: userReducer })

export const configureStore = () => {
    return createStore(
        rootReducer
    );
}