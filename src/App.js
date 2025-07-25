import React from 'react';
import './App.css';
import HeaderContainer from './componets/Header/HeaderContainer';
import Navbar from './componets/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import LoginPage from './Login/Login';

const App = () => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/Dialogs' element={<DialogsContainer />} />
					<Route path ='/Profile/:userId?' element = {<ProfileContainer />} />
          <Route path='/Users' element={<UsersContainer />} />
		       <Route path='/Login' element={<LoginPage />} />
					 
        </Routes>
      </div>
    </div>
  );
};

export default App;




