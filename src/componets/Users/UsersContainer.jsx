import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../redux/users-reduser";

let mapStateToProps = (state) => {
	return {
		 users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
     follow: (userid) => {
			 dispatch(followAC(userid));
		 },
		 unfollow: (userid) => {
			dispatch(unfollowAC(userid));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		}
	}
}


export default connect(mapStateToProps,mapDispatchToProps) (Users);