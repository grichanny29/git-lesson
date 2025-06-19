// import React from "react";
// import styles from './Users.module.css'
// import userphoto from '../../assets/images/Sample_User_Icon.png'
// import { NavLink } from "react-router-dom";



// let Users = (props) => {

// 	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

// 	let pages = [];
// 	for (let i = 1; i <= pagesCount; i++) {
// 		pages.push(i);
// 	}

// 	return <div>
// 		<div>
// 			{pages.map(p => {
// 				return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => { props.onPageChanged(p); }}> {p} </span>
// 			})}
// 		</div>
// 		{
// 			props.users.map(u => <div key={u.id}>
// 				<span>
// 					<div>
// 						<NavLink to={'/profile/' + 'Id'}>
// 							<img src={u.photos.small != null ? u.photos.small : userphoto} className={styles.userphoto} />
// 						</NavLink>
// 					</div>
// 					<div>
// 						{u.followed
// 							? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
// 								props.unfollow(u.id)}} >Unfollow</button>

// 							: <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
// 								props.follow(u.id) }} >Follow</button>}
// 					</div>
// 				</span>
// 				<span>
// 					<span>
// 						<div>{u.name}</div>
// 						<div>{u.status}</div>
// 					</span>
// 					<span>
// 						<div>{"u.location.country"}</div>
// 						<div>{"u.location.city"}</div>
// 					</span>
// 				</span>
// 			</div>)
// 		}
// 	</div>
// }


// export default Users;

import React from "react";
import styles from './Users.module.css'
import userphoto from '../../assets/images/Sample_User_Icon.png'
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {/* Постраничная навигация */}
            <div>
                {pages.map(p => (
                    <span
                        key={p}
                        className={props.currentPage === p ? styles.selectedPage : ''}
                        onClick={() => props.onPageChanged(p)}
                    >
                        {p}
                    </span>
                ))}
            </div>

            {/* Список пользователей */}
            {props.users.map(u => (
                <div key={u.id}>
                    <span>
                        <div>
                            {/* Переход на профиль пользователя */}
                            <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos?.small ?? userphoto}
                                    className={styles.userphoto}
                                    alt="User"
                                />
                            </NavLink>
                        </div>
                        <div>
                            {/* Кнопки подписки/отписки */}
                            {u.followed ? (
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => props.unfollow(u.id)}
                                >
                                    Unfollow
                                </button>
                            ) : (
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => props.follow(u.id)}
                                >
                                    Follow
                                </button>
                            )}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location?.country}</div>
                            <div>{u.location?.city}</div>
                        </span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Users;