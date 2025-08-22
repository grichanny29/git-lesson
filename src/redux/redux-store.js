


import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reduсer";
import dialogsReducer from "./dialogs-reduсer";
import sidebarReducer from "./sidebar-reduсer";
import usersReducer from "./users-reduсer";
import authReducer from "./auth-reducer";
import {thunk} from "redux-thunk"; // исправлено
import appReducer from "./app-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
	app:appReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
