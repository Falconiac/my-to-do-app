import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

function justShow(id) {
  const copyOfArrOfObj = [...arrOfObj];
  setArrOfObj(copyOfArrOfObj.filter((item) => id !== item.id));
}

//1. Erstelle eine Copy von arrOfObj.
//2. setArrOfObj, filter alle items, deren id NICHT die Initial-Id haben.
