import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css"

type DialogPropsType = {
    name: string
    id: number
}

type MessagePropsType = {
    message: string
}

const DialogItem = (props: any) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Victor"},
    ]

    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you road in Incubator?"},
        {id: 3, message: "Yo"},
        // {id: 4, message: "Igor"},
        // {id: 5, message: "Victor"},
    ]

    let dialogsElements = dialogs
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElemetns = messages
        .map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElemetns}
            </div>
        </div>
    );
};
