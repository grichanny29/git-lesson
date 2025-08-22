// import React from 'react';
// import Header from'./Header';
// import { connect } from 'react-redux'
// import { getAuthUserData, logout} from '../../redux/auth-reduser';


// class HeaderContainer extends React.Component {
// 	componentDidMount() {
// 		this.props.getAuthUserData();
// 	}

// 	render () {
// 	return  <Header {...this.props}/>
// }
// }
// const mapStateToProps = (state)=> ({
// 	isAuth:state.auth.isAuth,
// 	login:state.auth.login,
// });

// export default connect(mapStateToProps,{getAuthUserData,logout}) (HeaderContainer);

import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../redux/auth-reducer";

const HeaderContainer = ({ isAuth, login, logout }) => {
  return <Header isAuth={isAuth} login={login} logout={logout} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);