import ToDoItem from "../Components/ToDoItem";
import Footer from "../Components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Random({ arrToDos, changeDon, archivator, deleter }) {
  const unDone = arrToDos.filter((item) => !item.isDone);
  console.log(unDone);
  const randomCounter = Math.floor(Math.random() * (unDone.length + 1));
  //const randomItem = unDone[randomCounter];

  const [randomItem, setRandomItem] = useState(unDone);

  return (
    <>
      <Crown>
        <Headline>- RanDOmizer -</Headline>
      </Crown>

      <List>
        <Item>
          <button
            onClick={() => {
              setRandomItem(unDone[randomCounter]);
            }}
          >
            Click for a new Random ToDo...
          </button>
        </Item>
        <Item>
          <ToDoItem
            key={randomItem.id}
            id={randomItem.id}
            text={randomItem.text}
            isDone={randomItem.isDone}
            archived={randomItem.archived}
            donner={changeDon}
            abstellgleis={archivator}
            toerminate={deleter}
          />
        </Item>
      </List>
      <Footer></Footer>
    </>
  );
}

const Crown = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8d9db6;
`;

const Headline = styled.h2`
  color: #f1e3dd;
  font-size: 4em;
  text-align: center;
  font-weight: bold;
`;

const List = styled.ul`
  margin: 2em auto;
  padding-left: 10%;
`;

const Item = styled.li`
  list-style: none;
  margin: 2em auto;
`;
