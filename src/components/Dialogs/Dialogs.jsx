import React from "react";
import c from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () =>{
    let text = newMessageElement.current.value;
    alert(text)
  }

  return (
    <div>
      <div className={c.dialogs}>
        <div className={c.dialogsItems}>{dialogsElements}</div>
        <div className={c.messages}>{messagesElements}</div>
      </div>
      <div>
        <textarea ref={newMessageElement}></textarea>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
};

export default Dialogs;
