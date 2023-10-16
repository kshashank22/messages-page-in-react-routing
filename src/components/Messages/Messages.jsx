import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

function Messages({ messagesList }) {
  const [messages] = useState(messagesList);

  return (
    <div className="content">
      <h1>List of Messages</h1>
      <ul>
        {messages.map((eachElement) => (
          <li key={eachElement.id}>
            <NavLink to={`/messages/${eachElement.id}`}>
              {eachElement.message}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Messages;
