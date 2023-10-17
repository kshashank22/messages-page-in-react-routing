import React from "react";
import { useParams } from "react-router-dom";
import "../../App.css";

function MessagesInformation() {
  const { messageId } = useParams();

  const messagesList = [
    { id: 1, message: "Are you a FrontEnd Developer" },
    { id: 2, message: "Are you a BackEnd Developer" },
    { id: 3, message: "Are you a FullStack Developer" },
  ];
  const filterMessage = messagesList.find(
    (eachElement) => eachElement.id === parseInt(messageId)
  );
  return (
    <div className="content">
      <h1>Message {messageId}:</h1>
      <p>
        {filterMessage ? filterMessage.message : "Oops!! Message was Not Found"}
      </p>
    </div>
  );
}

export default MessagesInformation;
