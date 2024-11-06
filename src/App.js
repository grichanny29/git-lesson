import React, {Component} from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import  {Routes,Route}    from 'react-router-dom';
import { addPost } from './redux/state';


const App = (props) => {
  return (
		<div className='app-wrapper'>
			<Header />
		  <Navbar />
			<div class='app-wrapper-content'>	
				<Routes>
				  <Route path='/Dialogs/*'element ={<Dialogs state={props.state.dialogsPage}  />} />
			  	<Route path='/Profile/*'element ={<Profile profilePage={props.state.profilePage} 
					                                           addPost={props.addPost}
																										 updateNewPostText={props.updateNewPostText} /> }/> 
																										 			
				</Routes>
		</div>
		</div>
		
	)
}




export default App;
