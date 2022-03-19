import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likeCount: 12},
        {id: 2, message: "It's my first post", likeCount: 9},
        // {id: 3, message: "Yo"},
        // {id: 4, message: "Igor"},
        // {id: 5, message: "Victor"},
    ]

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
                <Post massege={postsData[0].message} likecount={postsData[0].likeCount}/>
                <Post massege={postsData[1].message} likecount={postsData[1].likeCount}/>
            </div>
        </div>
    )
}
