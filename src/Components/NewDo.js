import "../App.css";

import React from "react";
import styled from "styled-components";

export default function CreateDo() {
  return (
    <NewToDoSection>
      <LabelStyle for="toDoInput">new ToDo:</LabelStyle>
      <InputField
        id="toDoInput"
        type="text"
        placeholder="Don't forget to create a toDo"
      />
      <ButtonDefault>+ add +</ButtonDefault>
    </NewToDoSection>
  );
}

const NewToDoSection = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #8d9db6;
  height: 10vh;
`;

const LabelStyle = styled.label`
  color: #f1e3dd;
`;

const InputField = styled.input`
  width: 40%;
  color: #f1e3dd;
  background-color: #8d9db6;
`;

const ButtonDefault = styled.button`
height 4em;
width: 10em;
background-color: #667292;
color: greenyellow;
border-radius: 2em;

&:hover{
    border: 0.1em solid greenyellow;
}

`;
