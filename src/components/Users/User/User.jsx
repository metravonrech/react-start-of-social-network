import React from "react";
import s from '../Users.module.css';
import {NavLink} from "react-router-dom";


const User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.user_img}>
                <NavLink to={'/profile/' + props.users.id}>
                    <img
                        src={props.users.photos.small || 'https://autotonkosti.ru/sites/all/themes/autotonkosti/images/d-avatar.png'}
                        alt="cannot upload the picture"/>
                </NavLink>
                {props.users.followed
                    ? <button disabled={props.followingInProgress
                        .some(id => id === props.id)}
                              onClick={() => {
                                  props.unfollow(props.id)
                              }}>Unfollow</button>
                    : <button disabled={props.followingInProgress
                        .some(id => id === props.id)}
                              onClick={() => {
                                  props.follow(props.id)
                              }}>Follow</button>}
            </div>
            <div className={s.user_decr}>
                <div className={s.el_one}>{props.users.name}</div>
                <div className={s.el_three}>{"Unknown coutry"}</div>
                <div className={s.el_two}>{props.users.status || "This user has no status"}</div>
                <div className={s.el_four}>{"Unknown city"}</div>
            </div>
        </div>
    )
}

export default User;