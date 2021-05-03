import React, { useContext } from "react";
import { Container } from "./style";

import { Kino } from "../context";
const Navbar = () => {
  const [data, setData] = useContext(Kino);
  return (
    <Container>
      <h1>Kinolar ro'yhati</h1>
      <h2>Kinolar Soni {data.length}</h2>
    </Container>
  );
};
export default Navbar;
