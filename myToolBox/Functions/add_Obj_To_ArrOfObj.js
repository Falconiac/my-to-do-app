import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

function addNewObj(text) {
  const toAdd = [
    ...toDos,
    { id: nanoid(), text: text, isDone: false, archived: false },
  ];
  setToDoS(toAdd);
}
