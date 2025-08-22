
import React, { useEffect } from "react";
import "./App.css";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Navbar from "./componets/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import LoginPage from "./Login/Login";

import { connect, useDispatch } from "react-redux";
import {initializeApp} from "./redux/app-reducer"
import { compose } from "redux";
import Preloader from "./componets/Common/Preloader/Preloader";


const App = ({ initialized }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Preloader />;
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/Dialogs" element={<DialogsContainer />} />
          <Route path="/Profile/:userId?" element={<ProfileContainer />} />
          <Route path="/Users" element={<UsersContainer />} />
          <Route path="/Login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose (
  connect( mapStateToProps,{initializeApp}) (App)
)