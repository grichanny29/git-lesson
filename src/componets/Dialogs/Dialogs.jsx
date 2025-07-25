import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';



const Dialogs = (props) => {

let state = props.dialogsPage;

 let dialogsElements = state.dialogs.map ( d => 	<DialogItem name={d.name} key={d.id} id={d.id} /> );       
 let messagesElements = state.messages.map ( m => < Message message={m.message} key={m.id}/>);
 let newMessageBody = state.newMessageBody;




let addNewMesage = (values) => {
  props.sendMessage(values.newMessageBody);
}

 if (!props.isAuth) return<Navigate to={"/login"}/> ;


	return  (
		<div className={s.dialogs}>
			 <div className={s.dialogsItems}>
				 {dialogsElements}	
			 </div>
			 <div className={s.messages}>
				<div>{messagesElements}</div>
				<AddMessageFormRedux onSubmit={addNewMesage} />
			 </div>
		</div>
	)
}

const AddMessageForm = (props) => {
	return (
    <form onSubmit={props.handleSubmit}>
		  	<div>
					<Field component='textarea'name='newMessageBody' placeholder='Enter your message'/>
	     	   <div> <button>send message</button> </div>
			 </div>
		  </form>
	)
}

const  AddMessageFormRedux = reduxForm({form:"dialogAddMessageForm"})(AddMessageForm )

export default Dialogs;