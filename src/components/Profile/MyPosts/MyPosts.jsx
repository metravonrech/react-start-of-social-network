import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLengthCreator5 = maxLengthCreator(5)

const MyPosts = (props) => {

    let posts = props.profilePage.posts.map(elem => <Post message={elem.message} likes={elem.likes} key={elem.id}/>);

    const addPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div className={s.post_addition}>
                <PostFormRedux onSubmit={addPost}/>
            </div>
            <div>
                {posts}
            </div>
        </div>
    )
}

export const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your post"} name={"newPostText"} component={Textarea}
                   validate={[required, maxLengthCreator5]}/>
            <button>Add post</button>
        </form>
    )
}

export const PostFormRedux = reduxForm({form: 'post'})(PostForm)

export default MyPosts;
