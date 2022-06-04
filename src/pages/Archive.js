import ToDoItem from "../Components/ToDoItem";
import CreateDo from "../Components/NewDo";
import styled from "styled-components";

export default function Archive({ arrToDos, changeDon, archivator, deleter }) {
  return (
    <>
      <Crown>
        <Headline>- Archive -</Headline>
      </Crown>

      <List>
        {arrToDos
          .filter((item) => item.archived)
          .map((item) => {
            return (
              <Item>
                <ToDoItem
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  isDone={item.isDone}
                  archived={item.archived}
                  donner={changeDon}
                  abstellgleis={archivator}
                  toerminate={deleter}
                />
              </Item>
            );
          })}
      </List>
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
