import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://s.yimg.com/it/api/res/1.2/ktsCVHw6NZqbBgBcPlPwsw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/nba_cutout/players_l/10112019/5069.png"/>
            <div>{props.message}</div>
            <div className={s.like}>like amount {props.likes}</div>
        </div>
    )
}

export default Post;