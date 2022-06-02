import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

function changesAtObj(id) {
  const changes = arrOfObj.map((item) => {
    if (id === item.id) {
      return { ...item, exampleBOOL: !item.exampleBOOL };
    } else {
      return { ...item };
    }
  });
  setToDoS(changes);
}
