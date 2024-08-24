import React, {Component} from 'react';
import './Profile.css';

const Profile = (props) => {
	console.log(props)
	return  <div className='content'>
		<div>
	<img src={props.file}/>
	</div>
	<div>
		 ava+ description
	</div>
	<div>
		 My post
	</div>
	<div>
		 New post
	</div>
	<div className='post'>
	<div className='item'>
		 post 1
	</div>
	<div className='item'>
		 post 2
	</div>
	</div>
</div>
}

export default Profile;