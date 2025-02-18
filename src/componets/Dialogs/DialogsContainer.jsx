import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
	
	return <StoreContext.Consumer>
		{(store) => {
			let state = store.getState().dialogsPage;

			let onSendMessageClick = () => {
				store.dispatch(sendMessageCreator());
			}

			let onNewMesageChange = (body) => {
				store.dispatch(updateNewMessageBodyCreator(body));
			}
			return <Dialogs updateNewMessageBody={onNewMesageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
		}
		}
	</StoreContext.Consumer>

}

export default DialogsContainer;