import { combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
  sidebar:sidebarReducer
});

let store = legacy_createStore(redusers);


export default store;