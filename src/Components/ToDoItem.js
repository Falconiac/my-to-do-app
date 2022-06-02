import React from "react";
import styled from "styled-components";

export default function ToDoItem({
  id,
  text,
  isDone,
  donner,
  abstellgleis,
  toerminate,
}) {
  return (
    <ToDoStyle isDone={isDone}>
      <p>{text}</p>
      <div>
        <ButtonDefault onClick={() => donner(id)}>
          {isDone ? "uncomplete" : "complete"}
        </ButtonDefault>
        <ButtonDefault
          onClick={() => {
            isDone ? abstellgleis(id) : toerminate(id);
          }}
        >
          {isDone ? "archive" : "delete"}
        </ButtonDefault>
      </div>
    </ToDoStyle>
  );
}

const ToDoStyle = styled.article`
  height: 7em;
  width: 90%;
  margin: 2em auto;
  border: 0.3em solid #8d9db6;
  border-radius: 2em;
  font-weight: bold;

  background-color: ${(props) => (props.isDone ? "green" : "red")};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: auto 2em;

  box-shadow: 0.2em 0.5em 0.5em;

  p {
    margin-left: 2em;
  }

  div {
    margin-right: 2em;
  }

  div button {
    margin-left: 2em;
  }
`;
const ButtonDefault = styled.button`
height 4em;
width: 10em;
background-color:${(props) => (props.isDone ? "red" : "#667292")};
color: greenyellow;
border-radius: 2em;

&:hover{
    border: 0.1em solid greenyellow;
}

`;
