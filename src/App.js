import "./App.css";
import React from "react";
import styled from "styled-components";
import Header from "./Components/Header.js";
import CreateDo from "./Components/NewDo.js";

function App() {
  return (
    <Body>
      <Header />
      <CreateDo />
    </Body>
  );
}

export default App;

const Body = styled.section`
  * {
    margin: 0;

    box-sizing: border-box;
  }
`;
