import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import  {Routes,Route}    from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';




const App = (props) => {
  return (
		<div className='app-wrapper'>
			<Header />
		  <Navbar />
			<div className='app-wrapper-content'>	
				<Routes>
				  <Route path='/Dialogs/*'element ={<DialogsContainer store={props.store}  />} />
					                                          
			  	<Route path='/Profile/*'element ={<Profile store={props.store} /> }/> 																																				 																						 			
				</Routes>
		</div>
		</div>
		
	)
}




export default App;
