import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../App.css";
import { messagesDetails } from "../../Utilites";

function MessagesInformation({}) {
  const { messageId } = useParams();
  const [filteredMessage, setFilteredMessage] = useState(null);

  useEffect(() => {
    const filterMessage = messagesDetails.find(
      (eachElement) => eachElement.id === parseInt(messageId)
    );
    setFilteredMessage(filterMessage);
  }, [messageId]);

  return (
    <div className="content">
      <h1>Message {messageId}:</h1>
      <p>
        {filteredMessage
          ? filteredMessage.message
          : "Oops!! Message was Not Found"}
      </p>
    </div>
  );
}

export default MessagesInformation;
