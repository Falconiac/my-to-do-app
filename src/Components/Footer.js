import React from "react";
import styled from "styled-components";
import { Routes, Route, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Nav>
      <Navlink to="/">Home</Navlink>
      <Navlink to="/Archive">Archieve</Navlink>
      <Navlink to="/Random">Random</Navlink>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 5em;
  background-color: #8d9db6;
`;

const Navlink = styled(NavLink)`
  text-decoration: none;
  color: #f1e3dd;
  margin-top: 2%;
  border: 2px solid #f1e3dd;
  padding: 1em;
`;
