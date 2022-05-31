import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Heading>
      <p>To-Do-App</p>
    </Heading>
  );
}

const Heading = styled.header`
  background-color: #8d9db6;
  height: 10vh;

  p {
    color: #f1e3dd;
    font-size: 4em;
    text-align: center;
    font-weight: bold;
  }
`;
