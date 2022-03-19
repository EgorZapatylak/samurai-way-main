import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props:DialogPropsType) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Igor" id="4"/>
                <DialogItem name="Victor" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hello"/>
                <Message message="How are you road in Incubator?"/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};
