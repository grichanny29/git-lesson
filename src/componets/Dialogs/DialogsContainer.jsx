import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
}

let onNewMesageChange = (body) => {
	props.store.dispatch(updateNewMessageBodyCreator(body));
}

	return <Dialogs updateNewMessageBody={onNewMesageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer;