import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612616622_30-p-fon-polinnogo-tsveta-37.jpg"/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;