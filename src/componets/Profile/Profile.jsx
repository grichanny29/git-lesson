	import React from 'react';
	import s from './Profile.module.css';
  import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
  import MyPostsContainer from './MyPosts/MyPostsContainer';

	
	const Profile = (props) => {
		return (
		<div>
		  	<ProfileInfo profile={props.profile}/>
		    <MyPostsContainer/>					
	 </div>
	)
	}

	export default Profile;