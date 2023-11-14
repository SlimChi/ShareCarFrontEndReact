import React from "react";

import ConversationList from "../components/messages/ConversationList";
import Tchat from "../components/messages/Tchat";


export default function MessagesView() {
    return (
        <div>
            

            <ConversationList />

            <Tchat />
        </div>
    )
}