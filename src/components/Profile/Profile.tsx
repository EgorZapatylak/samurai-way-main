import React from "react";
import s from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, onPostChange, ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (post: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state}
                     onPostChange={onPostChange}
                     addPost={addPost}/>
        </div>
    );
};

