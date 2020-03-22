import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1200px-Golden_State_Warriors_logo.svg.png"/>
            <div className={s.login_block}>
                {props.isAuth
                    ? <div className={s.dropdown}>
                        <div className={s.dropBtn}>{props.login}</div>
                        <div className={s.dropdownContent}>
                            <div onClick={props.logout}>Log out</div>
                        </div>
                      </div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}

            </div>
        </header>
    )
}

export default Header;