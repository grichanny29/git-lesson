import React, {Component} from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return  <div className={s.content}>
		<div>
	<img src='https://avatars.mds.yandex.net/i?id=e3635bf538a886b56c595c1263c39ce33cc12abb-6846484-images-thumbs&n=13'/>
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
	<div className={s.post}>
	<div className={s.item}>
		 post 1
	</div>
	<div className={s.item}>
		 post 2
	</div>
	</div>
</div>
}

export default Profile;