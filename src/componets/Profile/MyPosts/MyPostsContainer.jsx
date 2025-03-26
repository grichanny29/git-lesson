import React from 'react';
import {addPostActionCreator, updateNewPostTextCreator } from "../../../redux/profile-reduser";
import MyPosts from './MyPosts';
import {connect} from "react-redux";






const mapStateToProps= (state)=> {
	return {
   posts: state.profilePage.posts,
	 newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps =(dispatch)=> {
	return { 
    updateNewPostText:(text)=> {
			let action =updateNewPostTextCreator(text);
			dispatch(action);
		},
		addPost:()=> {
			dispatch(addPostActionCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;