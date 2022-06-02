import { useState } from "react";
import { nanoid } from "nanoid";

// Innerhalb der Funktion APP, vor return:

const [arrOfObj, setArrOfObj] = useState([
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
  { id: nanoid(), text: "example", exampleBOOL: false },
]);

function forExample(param1, param2, paramX) {
  // Code, den die Funktion ausühren soll...
}

function htmlCompfromArrOfObj() {
  return arrOfObj.map((item) => (
    <ToRenderObj
      key={item.id}
      id={item.id}
      text={item.text}
      boolean={item.exampleBOOL}
      functionDown={forExample} //Prop mit beliebigem, Value muss Funktionsname sein!
    />
  ));
}

//Übergabe in der Componente:

export default function ToDoItem({ id, text, functionDown }) {
  return (
    //<html-Obj>

    //Funktionsaufruf durch:
    functionDown(param1, param2, paramX)
    //</html-Obj>
  );
}
