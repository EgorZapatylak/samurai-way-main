import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";

type MyPostsPropsType = {
    posts: ProfilePageType
    addPost: (post: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.posts.map((p) => <Post massege={p.message} likecount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
        }
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                <h4>New post</h4>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
