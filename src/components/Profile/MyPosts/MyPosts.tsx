import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 9},
        // {id: 3, message: "Yo"},
        // {id: 4, message: "Igor"},
        // {id: 5, message: "Victor"},
    ]

    let postsElements = posts
        .map((p) =><Post massege={p.message} likecount={p.likeCount}/>)

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
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
