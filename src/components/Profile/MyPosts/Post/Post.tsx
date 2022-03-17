import React from "react";
import s from "./Post.module.css";

type PostTypeProps ={
    massege: string;
    likecount: number;
}

export const Post = (props:PostTypeProps) => {
    return (
        <div className={s.item}>
            <img src="https://cdn1.flamp.ru/133937ff13551fbdbb0a7bc71ea2e0f5.jpeg"/>
            {props.massege}
            <div>
                <span>Like {props.likecount}</span>
            </div>

        </div>
    )
}
