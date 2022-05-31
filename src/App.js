import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header.js";
import CreateDo from "./Components/NewDo.js";
import ToDoItem from "./Components/ToDoItem.js";
import { useState } from "react";


const[toDo, setToDo]




function App() {
  return (
    <Body>
      <Header />
      <CreateDo />
      <ToDoItem toDoText="This is a to Do..." doneOrNot="false" />
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
