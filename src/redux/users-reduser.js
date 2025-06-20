import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
	users: [
		],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true,
		followingInProgress:[]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
       return {
				...state,
				  users: state.users.map (u => {
            if (u.id === action.userid) {
							return {...u,followed: true}
						}
						return u;
					})
			 }
		case UNFOLLOW:
			return {
				...state,
				  users: state.users.map (u => {
            if (u.id === action.userid) {
							return {...u,followed: false}
						}
						return u;
					})
			 }
			 case SET_USERS: {
				return {...state,users:action.users}
			 }

			 case SET_CURRENT_PAGE: {
				 return {...state,currentPage:action.currentPage}
			 }

			 case SET_TOTAL_USERS_COUNT: {
				return {...state,totalUsersCount:action.count}
			}

			case TOGGLE_IS_FETCHING: {
				 return {...state,isFetching:action.isFetching}
			}
      
			case TOGGLE_IS_FOLLOWING_PROGRESS: {
				 return {
					...state,
					followingInProgress:action.isFetching
					? [...state.followingInProgress,action.userid]
          : state.followingInProgress.filter(id=>id !=action.userId)
				}
			}

		default: 
		return state;
	}
};

export const followSuccess = (userid) => ({ type: FOLLOW, userid })
export const unfollowSuccess = (userid) => ({ type: UNFOLLOW, userid})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount})
export const toggleISFetching= (isFetching) => ({type:TOGGLE_IS_FETCHING,isFetching})
export const toggleFollowingInProgress  = (isFetching,userId) => ({type:TOGGLE_IS_FOLLOWING_PROGRESS,isFetching,userId})


export const getUsers = (currentPage,pageSize) => {
 return (dispatch) => {

	dispatch (toggleISFetching(true));
		usersAPI.getUsers (currentPage,pageSize).then (data => {
							dispatch(toggleISFetching(false));
							dispatch(setUsers (data.items));
							dispatch(setTotalUsersCount(data.totalCount));		
		});
		}
	}
  
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId));
		usersAPI.follow(userId)
			.then(response => {
				if (response.data.resultCode == 0) {
					dispatch(followSuccess(userId));
				}
				dispatch(toggleFollowingInProgress(false, userId));
			});
	}
}

export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toggleFollowingInProgress(true, userId));
		usersAPI.unfollow(userId)
			.then(response => {
				if (response.data.resultCode == 0) {
					dispatch(unfollowSuccess(userId));
				}
				dispatch(toggleFollowingInProgress(false, userId));
			});
	}
}







export default usersReducer;