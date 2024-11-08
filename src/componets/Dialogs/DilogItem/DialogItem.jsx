import React, {Component} from 'react';
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
	 let path = "/dialogs/" + props.id;
	 
	return  <div className={s.dialog + ' ' + s.active}>
	          <img src="https://avatars.mds.yandex.net/i?id=3637f6c5a39653c1dd90e7552901cfe4fdc2a368-4571967-images-thumbs&n=13" />  <NavLink to={path}>{props.name}</NavLink>
         </div>
}

export default DialogItem;