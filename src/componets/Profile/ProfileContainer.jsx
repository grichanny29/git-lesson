

import { useEffect } from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reduсer';
import { useParams, useNavigate } from 'react-router-dom'; // 👈 добавляем useNavigate
import Profile from './Profile';
import { compose } from 'redux';

function ProfileContainer(props) {
  const { userId } = useParams();
  const navigate = useNavigate(); // 👈 создаём навигатор

  useEffect(() => {
    const id = userId ? Number(userId) : props.authorizedUserId;
    if (id) {
      props.getUserProfile(id);
      props.getStatus(id);

      if (!userId && !props.isAuth) { // 👈 проверяем авторизацию
        navigate("/login");          // 👈 редиректим через navigate
      }
    }
  }, [userId, props.authorizedUserId, props.getUserProfile, props.getStatus, props.isAuth, navigate]);

  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
  );
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
)(ProfileContainer);