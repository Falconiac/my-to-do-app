import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

//Um die Eingabe einem Array of Objects hinzuzufügen:
function addNewObj(text) {
  const toAdd = [
    ...toDos,
    { id: nanoid(), text: text, isDone: false, archived: false },
  ];
  setToDoS(toAdd);
}

//In Funktion der Component:

<form
  onSubmit={(event) => {
    event.preventDefault();
    addToDo(text);
    console.log(text);
  }}
>
  <label htmlFor="input_ID">Label für Input</label>
  <input
    id="input_ID"
    type="text"
    value={text}
    placeholder="Placeholder, wenn gewünscht"
    onChange={(event) => setText(event.target.value)}
  />
  <button type="submit">HINZUFÜGEN</button>
</form>;
