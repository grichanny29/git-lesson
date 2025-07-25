


import React from "react";
import styles from './Users.module.css'
import userphoto from '../../assets/images/Sample_User_Icon.png'
import { NavLink } from "react-router-dom";
import {Pagination} from "antd"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.usersContainer}>
					
            {/* Список пользователей */}
            <div className={styles.usersList}>
                {props.users.map(u => (
                    <div key={u.id} className={styles.userItem}>
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location?.country}</div>
                            <div>{u.location?.city}</div>
                        </span>
													
                    </div>
										
                ))}
            </div>
						<Pagination onChange={props.onPageChanged} defaultCurrent={1} total={props.totalUsersCount}/>
        </div>
    );



};

export default Users;
