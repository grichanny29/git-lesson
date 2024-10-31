import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DilogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

let dialogsElements = props.state.dialogs.map ( d=> 	<DialogItem name={d.name} id={d.id} /> );       
let messagesElements = props.state.messages.map ( m => < Message message={m.message}/>);


let newMessagesElement = React.createRef();



let sendMessage = () => {
	 let text = newMessagesElement.current.value;
	 alert (text);
}



	return  (
		<div className={s.dialogs}>
			 <div className={s.dialogsItems}>
				 {dialogsElements}	
			 </div>
			 <div className={s.messages}>
				{messagesElements}
				<div>
	      <textarea ref={newMessagesElement}></textarea>
		    </div>
       	 <div>
	     	<button onClick={sendMessage}>send message</button>
		   </div>
			 </div>
		</div>
	)
}

export default Dialogs;