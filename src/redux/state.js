
let state = {
	profilePage:{
    posts:  [
			{id: 1, message: 'Hi,how are you?',likesCount:12},
			{id: 2, message: 'It,s my first post',likesCount:11},
			{id: 3,message: 'Blabla',likesCount:11},
			{id: 4,message: 'Dada',likesCount:11}
			
		]
	},
	dialogsPage:{
		dialogs: [
			{id: 1, name: 'Dimych'},
			{id: 2, name: 'Andrew'},
			{id: 3, name: 'Sasha'},
			{id: 4, name: 'Viktor'},
			{id: 5, name: 'Svetlana'},
			{id: 6, name: 'Vladimir'},
			
		],
    messages: [
			{id: 1, message: 'Hi'},
			{id: 2, message : 'How is your it-kamasutra? '},
			{id: 3, message: 'Yo'},
			{id: 4, message: 'Yo'},
			{id: 5, message: 'Yo'},
			{id: 6, message: 'Yo'},
		]
	},     
	 sidebar: {
		friends: [
			{id: 1, name:'Andrew'},
			{id: 2, name:'Sasha'},
			{id: 1, name:'Sveta'},
		]
	 }
}

export default state;