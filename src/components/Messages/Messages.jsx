import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const Messages = () => {
  const messagesList = [
    { id: 1, message: "messages1" },
    { id: 2, message: "messages2" },
    { id: 3, message: "messages3" },
  ];

  return (
    <div className="content">
      <h1>List of Messages</h1>
      <ul>
        {messagesList.map((eachElement) => (
          <li key={eachElement.id}>
            <NavLink to={`/messages/${eachElement.id}`}>
              {eachElement.message}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
