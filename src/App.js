import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header.js";
import CreateDo from "./Components/NewDo.js";
import Footer from "./Components/Footer.js";
import ToDoItem from "./Components/ToDoItem.js";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [toDos, setToDoS] = useState([
    { id: nanoid(), text: "Do this", isDone: false, archived: false },
    { id: nanoid(), text: "Do that", isDone: true, archived: false },
    { id: nanoid(), text: "Do this too", isDone: false, archived: false },
  ]);

  function makeToDos() {
    return toDos.map((item) => (
      <ToDoItem
        key={item.id}
        id={item.id}
        text={item.text}
        isDone={item.isDone}
        archived={item.archived}
        donner={changeDone}
        abstellgleis={toArchive}
        toerminate={deleteItem}
      />
    ));
  }

  function toArchive(id) {
    const archivator = toDos.map((item) => {
      if (id === item.id) {
        return { ...item, archived: !item.archived };
      } else {
        return { ...item };
      }
    });
    setToDoS(archivator);
    console.log(toDos);
  }

  function changeDone(id) {
    const changed = toDos.map((item) => {
      if (id === item.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return { ...item };
      }
    });
    setToDoS(changed);
  }

  function deleteItem(id) {
    const terminaters = [...toDos];
    setToDoS(terminaters.filter((item) => id !== item.id));
  }

  function addNewToDo(text) {
    const toDoCreator = [
      ...toDos,
      { id: nanoid(), text: text, isDone: false, archived: false },
    ];
    console.log(toDoCreator);
    setToDoS(toDoCreator);
  }

  return (
    <Body>
      <Header />
      <CreateDo addToDo={addNewToDo} />
      {makeToDos()}
      <Footer />
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
