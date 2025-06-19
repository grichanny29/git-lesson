import React from 'react';
import Header from'./Header';
import axios from 'axios';
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reduser';
import { authAPI } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		authAPI.me()
				 .then (response => {
						if (response.data.resultCode ===0) {
							let{Id,login,email} = response.data.data;
							this.props.setAuthUserData(Id,login,email);
						}
	});
	}

	render () {
	return  <Header {...this.props}/>
}
}
const mapStateToProps = (state)=> ({
	isAuth:state.auth.isAuth,
	login:state.auth.login,
});

export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);