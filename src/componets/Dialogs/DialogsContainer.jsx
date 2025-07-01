import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs';
import {connect} from "react-redux";
import { withAuthNavigate } from '../../hoc/withAuthNavigate'


let mapStateToProps =(state)=> {
	return {
		dialogsPage: state.dialogsPage,
		isAuth:state.auth.isAuth
	}
}

 let mapDispatchToProps =(dispatch)=> {
	return {
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
		updateNewMessageBody:(body) => {
         dispatch(updateNewMessageBodyCreator(body));
		}
	}
 }
 
let AuthNavigateComponent = withAuthNavigate (Dialogs);



const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (AuthNavigateComponent);

export default DialogsContainer;

