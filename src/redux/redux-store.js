import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
  sidebar:sidebarReducer,
	usersPage: usersReducer
});

let store = legacy_createStore(redusers);


export default store;