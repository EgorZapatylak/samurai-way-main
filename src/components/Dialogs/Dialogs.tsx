import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message"
import {DialogItem} from "./DialogItem/DialogsItem";


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
    ]

    let dialogsElements = dialogs
        .map((d) => <DialogItem name={d.name} id={d.id}/>);

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
