// import { usersAPI } from "../api/api";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SET_USER_PROFILE = 'SET_USER_PROFILE';

// let initialState ={
// 	posts: [
// 		{ id: 1, message: 'Hi,how are you?', likesCount: 12 },
// 		{ id: 2, message: 'It,s my first post', likesCount: 11 },
// 		{ id: 3, message: 'Blabla', likesCount: 11 },
// 		{ id: 4, message: 'Dada', likesCount: 11 }
// 	],
// 	newPostText: 'it-kamasytra',
// 	profile: null
// };



// const profileReducer =(state=initialState,action)=> {
// 	switch (action.type){
// 		case ADD_POST:{
// 			let newPost = {
// 				id: 5,
// 				message:state.newPostText,
// 				likesCount:0
// 			};
// 			 return {
// 			  ... state,
// 				posts: [...state.posts,newPost],
// 				newPostText:''
// 		};
// 	}
// 		case UPDATE_NEW_POST_TEXT: {
// 			return {
// 				...state,
// 				newPostText: action.newText
// 			}
// 		}
// 		case SET_USER_PROFILE: {
// 			return {...state,profile:action.profile}
// 		}
// 		default: 
// 		return state;
// 	}
// };

// export const addPostActionCreator = () => ({ type: ADD_POST })
// export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

// export const getUserProfile = (userId) => (dispatch) => {
//      usersAPI.getProfile(id)
//             .then(response => {
//                 dispatch(setUserProfile(response.data));
//             });
// }

// export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText:text})

// export default profileReducer;

import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 },
        { id: 3, message: 'Blabla', likesCount: 11 },
        { id: 4, message: 'Dada', likesCount: 11 }
    ],
    newPostText: 'it-kamasytra',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newId = state.posts.length + 1;
            let newPost = {
                id: newId,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
};

export default profileReducer;