import { type } from "@testing-library/user-event/dist/type";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
	users: [
		],
		pageSize: 5,
		totalUsersCount: 0,
		currentPage: 1,
		isFetching: true
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


		default: 
		return state;
	}
};

export const follow = (userid) => ({ type: FOLLOW, userid })
export const unfollow = (userid) => ({ type: UNFOLLOW, userid})
export const setUsers = (users) => ({type:SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE,currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_TOTAL_USERS_COUNT,count:totalUsersCount})
export const toggleISFetching= (isFetching) => ({type:TOGGLE_IS_FETCHING,isFetching})

export default usersReducer;