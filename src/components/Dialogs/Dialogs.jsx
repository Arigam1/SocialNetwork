import React from "react";
import c from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id
    return (
        <div className={c.dialog}> <NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
    return (
        <div className={c.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                <DialogItem name = "Vasya" id="1"/> 
                <DialogItem name = "Sveta" id="2"/> 
                <DialogItem name = "Natasha" id="3"/> 
                <DialogItem name = "Nstya" id="4"/> 
            </div>
            <div className={c.messages}>
                <Message message = "Hello Bro"/>
                <Message message = "Hello ssssssssss"/>
                <Message message = "Hello swwwwwwwwww"/>
                <Message message = "Hello dddddddddddd"/>
            </div>
        </div>
    )
}

export default Dialogs