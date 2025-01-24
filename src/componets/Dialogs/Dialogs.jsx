import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reduser';


const Dialogs = (props) => {

	let state = props.store.getState().dialogsPage;

 let dialogsElements = state.dialogs.map ( d => 	<DialogItem name={d.name} id={d.id} /> );       
 let messagesElements = state.messages.map ( m => < Message message={m.message}/>);
 let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
  props.store.dispatch(sendMessageCreator());
}

let onNewMesageChange = (e) => {
  let body = e.target.value;
	props.store.dispatch(updateNewMessageBodyCreator(body));
}




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