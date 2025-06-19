import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reduser";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reduser";
import { thunk as thankMiddleware} from "redux-thunk"; 

let redusers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
  sidebar:sidebarReducer,
	usersPage: usersReducer,
	auth:authReducer
});

let store = legacy_createStore(redusers,applyMiddleware(thankMiddleware ));

window.store = store



export default store;

