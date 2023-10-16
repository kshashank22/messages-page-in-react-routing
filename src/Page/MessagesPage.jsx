import React from "react";
import "./MessagesPage.css";
import NavBar from "../components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Messages from "../components/Messages/Messages";
import MessagesInformation from "../components/MessagesInformation/MessagesInformation";

function MessagesPage() {
  const messagesList = [
    { id: 1, message: "messages1" },
    { id: 2, message: "messages2" },
    { id: 3, message: "messages3" },
  ];

  const messagesDetails = [
    { id: 1, message: "Are you a FrontEnd Developer" },
    { id: 2, message: "Are you a BackEnd Developer" },
    { id: 3, message: "Are you a FullStack Developer" },
  ];

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route
            exact
            path="/messages"
            element={<Messages messagesList={messagesList} />}
          ></Route>
          <Route
            exact
            path="/messages/:messageId"
            element={<MessagesInformation messagesDetails={messagesDetails} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MessagesPage;
