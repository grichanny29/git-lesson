import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';



const Dialogs = (props) => {

let state = props.dialogsPage;

 let dialogsElements = state.dialogs.map ( d => 	<DialogItem name={d.name} key={d.id} id={d.id} /> );       
 let messagesElements = state.messages.map ( m => < Message message={m.message} key={m.id}/>);
 let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
	props.sendMessage();
}

let onNewMesageChange = (e) => {
  let body = e.target.value;
	props.updateNewMessageBody(body);
}

 if (!props.isAuth) return<Navigate to={"/login"}/> ;


	return  (
		<div className={s.dialogs}>
			 <div className={s.dialogsItems}>
				 {dialogsElements}	
			 </div>
			 <div className={s.messages}>
				<div>{messagesElements}</div>
				<div>
	          <textarea value={newMessageBody} onChange={onNewMesageChange}></textarea>
		    </div>
       	 <div>
	     	     <button onClick={onSendMessageClick }>send message</button>
		   </div>
			 </div>
		</div>
	)
}

export default Dialogs;