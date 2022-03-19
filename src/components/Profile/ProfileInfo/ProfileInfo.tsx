import React from "react";
import s from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.back}
                     src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612616622_30-p-fon-polinnogo-tsveta-37.jpg"/>
            </div>
            <div className={s.description_profile}>
                Ava + description
            </div>
        </div>
    )
}

