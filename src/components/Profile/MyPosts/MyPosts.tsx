import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";

type PostsPropsType = {
    posts: Array<PostPropsType>
}

type PostPropsType = {
    id:number
    message:string
    likeCount: number
}

export const MyPosts = (props:PostsPropsType) => {

    let postsElements = props.posts
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
