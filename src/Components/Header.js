import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Heading>
      <h2>ToDo-App</h2>
    </Heading>
  );
}

const Heading = styled.header`
  background-color: #8d9db6;
  height: 10vh;
  width: 100%
  position: fixed;
  top:0;

  h2 {
    color: #f1e3dd;
    font-size: 4em;
    text-align: center;
    font-weight: bold;
  }
`;
