import React from "react";
import "./MessagesPage.css";
import NavBar from "../components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Messages from "../components/Messages/Messages";
import MessagesInformation from "../components/MessagesInformation/MessagesInformation";

function MessagesPage() {
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route exact path="/contact" Component={Contact}></Route>
        <Route exact path="/messages" Component={Messages}></Route>
        <Route
          exact
          path="/messages/:messageId"
          Component={MessagesInformation}
        ></Route>
      </Routes>
    </div>
  );
}

export default MessagesPage;
