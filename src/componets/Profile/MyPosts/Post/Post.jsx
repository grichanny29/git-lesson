import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {

	return  (
	<div className={s.item}>
		<img src='https://avatars.mds.yandex.net/i?id=739bff069dd931ff3a32d2160977eeea6204193d-5233124-images-thumbs&n=13' />
		{props.message}
 		 <div> 
		 <span>like</span> { props.likesCount }
		 </div>
	</div>
	
)
}

export default Post;