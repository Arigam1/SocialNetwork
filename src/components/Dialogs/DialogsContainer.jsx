import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../StoreContext'


const DialogsContainer = () => {
  return <StoreContext.Consumer>
    { store => {
        let state = store.getState().dialogsPage;

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
      
        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };
      
          return <Dialogs sendMessage = {onSendMessageClick}
            updateNewMessageBody = {onNewMessageChange}
            dialogsPage={state}/>
    }}
  </StoreContext.Consumer>
}

export default DialogsContainer;
