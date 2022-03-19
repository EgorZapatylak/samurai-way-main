import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dimych</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/4'>Igor</NavLink>
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you road in Incubator?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
};
