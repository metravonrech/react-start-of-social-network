import React from "react";
import s from "./Users.module.css";
import User from "./User/User";

const Users = (props) => {
    let pages = [];

    for (let i = props.currentPage - 5; (i <= props.currentPage + 5) || (props.currentPage > props.totalUsersCount); i++) {
        if (pages.length === 11) {
            break;
        } else if (i < 1) {
            i = 1;
        }
        pages.push(i)
    }

    let pageButtons = pages.map(page =>
        <span
            key={page}
            onClick={() => props.onPageChanged(page)}
            className={props.currentPage === page ? s.selectedPage : undefined}
        >
                                {page}
                            </span>
    );

    // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    return (
        <div className={s.users}>
            <div className={s.pages}>
                {pageButtons}
            </div>
            <h1>Users</h1>
            {props.users.map(elem =>
                <User
                    users={elem}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    key={elem.id}
                    id={elem.id}
                    followingInProgress={props.followingInProgress}
                />)}
            <div className={s.pages}>
                {pageButtons}
            </div>
        </div>
    )
}

export default Users;