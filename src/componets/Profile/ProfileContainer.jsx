// import React, {useEffect} from 'react';
// import {connect} from "react-redux";
// import Profile from "./Profile";
// import axios from "axios";
// import {useParams} from "react-router-dom";
// import {setUserProfile } from '../../redux/profile-reduser';

// function ProfileContainer(props) {
//     let {userId} = useParams();
//     if (!userId) {
//         userId = 2;
//     }
//     useEffect(() => {
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
//             .then((response) => {
//                 props.setUserProfile(response.data);
//             });
//     }, [userId]);

//     return (
//         <div>
//             <Profile profile={props.profile} />
//         </div>
//     );
// }

// let mapStateToProps = (state)=> ({
//     profile: state.profilePage.profile
// })

// export default connect (mapStateToProps, {setUserProfile})(ProfileContainer)











//   import React from 'react';
// 	import s from './Profile.module.css';
// 	import axios from 'axios';
//   import Profile from './Profile';
//   import { connect } from 'react-redux';
// 	import { setUserProfile } from '../../redux/profile-reduser';
//   import {useParams} from "react-router-dom"
	
// export function withRouter(Children) {
//     return(props)=> {
//         const match  = {params: useParams()};
//         return <Children {...props}  match={match}/>
//     }
// }

// 	class ProfileContainer extends React.Component {
//    componentDidMount () {
// 		debugger;
// 		let userId = this.props.match.params.userId;

// 			axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).
// 						 then (response => {
// 								this.props.setUserProfile(response.data);
// 			});
// 	 }

// 		render () {
//        return (
// 		<Profile {...this.props} profile={this.props.profile} />
// 	)
// 	}
// 		}
		

// 	let mapStateToProps = (state) => ({
//        profile: state.profilePage.profile
// 	});	

//   let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// 	export default connect (mapStateToProps,{setUserProfile} ) (WithUrlDataContainerComponent) ;


// import React from 'react';
// import s from './Profile.module.css';
// import axios from 'axios';
// import Profile from './Profile';
// import { connect } from 'react-redux';
// import { setUserProfile } from '../../redux/profile-reduser';
// import { useParams } from "react-router-dom";
// import { usersAPI } from '../../api/api';

// export function withRouter(Children) {
//     return (props) => {
//         const match = { params: useParams() };
//         return <Children {...props} match={match} />;
//     };
// }

// class ProfileContainer extends React.Component {
//     componentDidMount() {
//         let userId = this.props.match.params.userId;
//         if (!userId) {
//             userId=2;
//         }

//        usersAPI.getProfile(userId)
//             .then(response => {
//                 this.props.setUserProfile(response.data);
//             });
//     }

//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         );
//     }
// }

// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);


// import  { useEffect } from 'react';
// import s from './Profile.module.css';
// import { connect } from 'react-redux';
// import { getUserProfile } from '../../redux/profile-reduser';
// import { useParams } from 'react-router-dom';
// // import { usersAPI } from '../../api/api';
// import Profile from './Profile';

// function ProfileContainer(props) {
//     const { userId } = useParams();

//     useEffect(() => {
//         let id = userId ? userId : 2; 
// 				this.props.getUserProfile(userId);
       
//     }, [userId]);

//     return <Profile {...props} profile={props.profile} />;
// }

// const mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// });

// export default connect(mapStateToProps, { getUserProfile })(ProfileContainer);

import { useEffect } from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profile-reduser';
import {  useParams } from 'react-router-dom';
import Profile from './Profile';
import { withAuthNavigate } from '../../hoc/withAuthNavigate'

function ProfileContainer(props) {
    const { userId } = useParams();

    useEffect(() => {
        const id = userId ? userId : 2; // или используйте Number(userId), если нужно число
        props.getUserProfile(id);
    }, [userId, props]);

		

    return <Profile {...props} profile={props.profile} />;
}

let AuthNavigateComponent = withAuthNavigate ( ProfileContainer);


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
		isAuth:state.auth.isAuth
});

export default  connect(mapStateToProps, { getUserProfile })(AuthNavigateComponent);


