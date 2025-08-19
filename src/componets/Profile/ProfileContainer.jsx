
import { useEffect } from 'react';
import s from './Profile.module.css';
import { connect } from 'react-redux';
import { getStatus, getUserProfile, updateStatus } from '../../redux/profile-reduser';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { compose } from 'redux';

function ProfileContainer(props) {
  const { userId } = useParams();

  useEffect(() => {
    // Приводим к числу, если userId есть
    const id = userId ? Number(userId) : props.authorizedUserId;

    // Делаем запрос только если id определён и не NaN
    if (id) {
      props.getUserProfile(id);
      props.getStatus(id);
    }
  }, [userId, props.authorizedUserId, props.getUserProfile, props.getStatus]);

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

