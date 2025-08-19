import React, {Component} from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
	return  <header className={s.header}>
    	       <img src='https://img.freepik.com/free-vector/professional-gg-logotype-template_23-2149221834.jpg?ga=GA1.1.1670337544.1726774736&semt=ais_hybrid'/>

						 <div className={s.loginBlock}>
							{props.isAuth 
							? <div> {props.login} <button onClick={props.logout}>Log out</button> </div>
							:<NavLink to={'/login'}>Login</NavLink>}
						 </div>
          </header>
}

export default Header;