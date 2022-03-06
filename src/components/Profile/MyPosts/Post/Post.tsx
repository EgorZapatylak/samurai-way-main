import React from "react";
import s from "./Post.module.css";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://cdn1.flamp.ru/133937ff13551fbdbb0a7bc71ea2e0f5.jpeg"/>
            Post 1
            <div>
                <span>Like</span>
            </div>

        </div>
    )
}

export default Post;