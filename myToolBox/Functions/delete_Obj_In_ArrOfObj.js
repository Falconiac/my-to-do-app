import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

function deleteItem(id) {
  const copyOfArrOfObj = [...arrOfObj];
  setArrOfObj(copyOfArrOfObj.filter((item) => id !== item.id));
}
