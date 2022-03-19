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

const DialogItem = (props:any) => {

    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props:any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Igor"},
        {id: 5, name: "Victor"},
    ]

    let messagesData = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you road in Incubator?"},
        {id: 3, message: "Yo"},
        // {id: 4, message: "Igor"},
        // {id: 5, message: "Victor"},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message="Yo"/>
            </div>
        </div>
    );
};
