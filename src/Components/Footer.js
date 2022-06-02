import React from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <Nav>
      <Link to="/Home">Home</Link>
      <Link to="/Archieve">Archieve</Link>
      <Link to="/Random">Random</Link>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 2em;
`;
