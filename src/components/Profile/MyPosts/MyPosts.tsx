import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post massege = "Hi, how are you?" likecount = {15} />
                <Post massege = "It's my first post" likecount = {10} />
            </div>
        </div>
    )
}

export default MyPosts;