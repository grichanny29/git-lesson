const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrew' },
		{ id: 3, name: 'Sasha' },
		{ id: 4, name: 'Viktor' },
		{ id: 5, name: 'Svetlana' },
		{ id: 6, name: 'Valera' },

	],
	messages: [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-kamasutra? ' },
		{ id: 3, message: 'Yo' },
		{ id: 4, message: 'Yo' },
		{ id: 5, message: 'Yo' },
		{ id: 6, message: 'Yo' },
	],
	newMessageBody: ""
};

const dialogsReducer = (state=initialState,action) => {

	switch(action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
			  	...state,
			  	newMessageBody:action.body
			}
		 case SEND_MESSAGE:
				let body = state.newMessageBody;
				return {
					...state,
					newMessageBody:'',
				messages:[...state.messages,{id:7,message:body}]
				};
		default:
				return state;
	}
}


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({type:UPDATE_NEW_MESSAGE_BODY,body:body})




export default dialogsReducer;