	import React, {Component} from 'react';
	import s from './ProfileInfo.module.css';


	const ProfileInfo = () => {
		return (
		<div>
			<div>
		     <img className={s.imgBlock} src='https://img.freepik.com/premium-photo/people-generating-images-using-artificial-intelligence-on-laptop_23-2150794312.jpg?t=st=1726775601~exp=1726776201~hmac=83589cf60427f66905c37fa34db755bf9821c88f17d3ed5e614a20ad53167db0'/>
		</div>
		<div className={s.descriptionBlock}>
			ava + description
		</div>
	 </div>
	)
	}

	export default ProfileInfo;