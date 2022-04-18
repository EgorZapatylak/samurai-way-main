import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType, State} from "../../../Redux/State";

type MyPostsPropsType = {
    posts: ProfilePageType
    addPost: (post: string) => void
    onPostChange: (newPostTest: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.posts.map((p) => <Post massege={p.message} likecount={p.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
            props.posts.newPostText = "";
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onPostChange(e.currentTarget.value);
    }



    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.posts.newPostText}/>
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
