import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header.js";
import CreateDo from "./Components/NewDo.js";
import ToDoItem from "./Components/ToDoItem.js";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [toDos, setToDoS] = useState([
    { id: nanoid(), text: "Do this", isDone: false, archived: false },
    { id: nanoid(), text: "Do that", isDone: false, archived: false },
    { id: nanoid(), text: "Do this too", isDone: false, archived: false },
  ]);

  function makeToDos() {
    return toDos.map((item) => <ToDoItem key={item.id} text={item.text} />);
  }

  return (
    <Body>
      <Header />
      <CreateDo />
      {makeToDos()}
    </Body>
  );
}

export default App;

const Body = styled.section`
  * {
    margin: 0;

    box-sizing: border-box;
  }
`;
