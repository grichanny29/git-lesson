import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import  {Routes,Route}    from 'react-router-dom';
import store from './redux/state';



const App = (props) => {
  return (
		<div className='app-wrapper'>
			<Header />
		  <Navbar />
			<div className='app-wrapper-content'>	
				<Routes>
				  <Route path='/Dialogs/*'element ={<Dialogs store={props.store}  />} />
					                                          
			  	<Route path='/Profile/*'element ={<Profile profilePage={props.state.profilePage} 
				                                              	dispatch={props.dispatch} /> }/> 		
																																										 																						 			
				</Routes>
		</div>
		</div>
		
	)
}




export default App;
