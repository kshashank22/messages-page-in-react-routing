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
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/messages" element={<Messages />}></Route>
          <Route
            exact
            path="/messages/:messageId"
            element={<MessagesInformation />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MessagesPage;
