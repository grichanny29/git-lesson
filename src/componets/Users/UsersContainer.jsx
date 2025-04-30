import React from "react";  
import { connect } from "react-redux";
import { follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount, toggleISFetching} from "../../redux/users-reduser";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";




class  UsersContainer extends React.Component {
	componentDidMount () {
		this.props.toggleISFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
				 then (response => {
						this.props.setUsers (response.data.items);
						this.props.setTotalUsersCount(response.data.totalCount);
						this.props.toggleISFetching(false);
	});
	}
	
		 onPageChanged = (pageNumber) => {
					this.props.setCurrentPage(pageNumber);
					this.props.toggleISFetching(true);
					axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).
					then (response => {
						 this.props.setUsers (response.data.items);
						 this.props.toggleISFetching(true);
	 });
		 }
	
		render () {
				return <>
			  { this.props.isFetching ? <Preloader/> : null}
				<Users totalUsersCount={this.props.totalUsersCount} 
											pageSize={this.props.pageSize}
											currentPage={this.props.currentPage}	
											onPageChanged={this.onPageChanged}
											users ={this.props.users}
											follow ={this.props.follow}
											unfollow ={this.props.unfollow}
											/>
											</>
	}
		}
	

let mapStateToProps = (state) => {
	return {
		 users: state.usersPage.users,
		 pageSize: state.usersPage.pageSize,
		 totalUsersCount:state.usersPage.totalUsersCount,
		 currentPage:state.usersPage.currentPage,
		 isFetching: state.usersPage.isFetching
	}
}

// let mapDispatchToProps = (dispatch) => {
// 	return {
//      follow: (userid) => {
// 			 dispatch(followAC(userid));
// 		 },
// 		 unfollow: (userid) => {
// 			dispatch(unfollowAC(userid));
// 		},
// 		setUsers: (users) => {
// 			dispatch(setUsersAC(users));
// 		},
// 		setCurrentPage: (pageNumber) => {
// 			dispatch( setCurrentPageAC(pageNumber));
// 		},
// 		  setTotalUsersCount: (totalCount) => {
// 			dispatch(setUsersTotalCountAC(totalCount));
// 	},
// 	toggleISFetching:(isFetching) => {
// 		dispatch(toggleISFetchingAC(isFetching));
// 	}
// }
// }

export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toggleISFetching }) ( UsersContainer );

