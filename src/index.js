import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components";
import io from "socket.io-client";

ReactDOM.render(<App />, document.getElementById("root"));


//Creating socket only if not exist, else returning the existing socket
export function createSocket() {
// connecting to Socket.IO chat server
  let socket;
  if (!socket){
      socket = io("https://spotim-demo-chat-server.herokuapp.com");
      socket.on("connect", function() {
        console.log("connected to chat server!");

      });

    socket.on("disconnect", function() {
      console.log("disconnected from chat server!");
    });
    return socket;
  }

  return socket;

  }






