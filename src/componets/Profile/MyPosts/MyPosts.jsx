import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import { addPost } from '../../../redux/state';

const MyPosts = (props) => {
	let postsElements = props.posts.map (p => < Post message ={p.message}likesCount={p.likesCount} />) ;
   
	let newPostElement = React.createRef ();

	let addPost = () => {
			props.addPost ();
		
	}
  let onPostChange = () => {
		let text = newPostElement.current.value;
	  props.updateNewPostText(text);
 }

	return  (
	<div className={s.postBlock}>
		<h3> My post</h3> 
	<div>
		<div>
	      <textarea onChange={ onPostChange} ref={newPostElement}  value={props.newPostText}/>                                
		</div>
		<div>
	     	<button onClick={()=> addPost(newPostElement.current.value)}>Add post</button>
		</div> 
	</div>
	<div className={s.posts}>
       	{postsElements}
	</div>
</div>
)
}
 
export default MyPosts;