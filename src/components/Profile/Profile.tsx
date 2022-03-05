import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612616622_30-p-fon-polinnogo-tsveta-37.jpg"/>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My post
            </div>
            <div>
                New post
            </div>
            <div className='posts'>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}

export default Profile;