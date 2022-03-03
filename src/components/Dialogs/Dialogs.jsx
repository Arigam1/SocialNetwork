import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  return (
    <div>
      <div className={c.dialogs}>
        <div className={c.dialogsItems}>{dialogsElements}</div>
        <div className={c.messages}>{messagesElements}</div>
      </div>
      <div>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick}>Add</button>
      </div>
    </div>
  );
};

export default Dialogs;
