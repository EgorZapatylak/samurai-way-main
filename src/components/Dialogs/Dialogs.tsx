import React from 'react';
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message"
import {DialogItem} from "./DialogItem/DialogsItem";
import {DialogsPageType} from "../../Redux/State";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);

    let messagesElemetns = props.state.messages
        .map((m) => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_item}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElemetns}
            </div>
            <textarea>
            </textarea>
        </div>
    );
};
