import React, {Component} from 'react';
import './App.css';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';



const getUser = ({id}) => {
	const user = {
		id: 1,
		name: 'ivan',
		secondName: 'Ivanov',
		img: null,
		friends: [{id: 2, name: '', secondName: '', avatar: ''}]
	}
	if(id === 1) return user
	return undefined
}


const App = () => {


	const myUer = getUser({id:2})
  return (
		<div className='app-wrapper'>
			<Header />
		  <Navbar />
		  {myUer ? <Profile file={'https://avatars.mds.yandex.net/i?id=e3635bf538a886b56c595c1263c39ce33cc12abb-6846484-images-thumbs&n=13'} user={myUer}/> : 'not found user'}
		</div>
  );
}




export default App;
