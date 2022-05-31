import React from "react";
import styled from "styled-components";

export default function ToDoItem({ toDoText, doneOrNot, archiveOrDelete }) {
  return (
    <ToDoStyle>
      <p>This ist some test-text...</p>
      <div>
        <ButtonDefault>{doneOrNot} done or not </ButtonDefault>
        <ButtonDefault>{archiveOrDelete} archive or delete</ButtonDefault>
      </div>
    </ToDoStyle>
  );
}

const ToDoStyle = styled.article`
  height: 7em;
  width: 90%;
  margin: 1em auto;

  border: 0.3em solid #8d9db6;
  border-radius: 2em;

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
background-color: #667292;
color: greenyellow;
border-radius: 2em;

&:hover{
    border: 0.1em solid greenyellow;
}

`;
