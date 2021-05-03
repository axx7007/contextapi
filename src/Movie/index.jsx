import React, { useContext } from "react";
import { Container } from "./style";

const Movie = ({ value }) => {
  return (
    <Container>
      <div>
        <h1>Kino nomi :{value.name} </h1>
        <h1>Kino narxi : {value.price} </h1>
        <hr />
      </div>
    </Container>
  );
};
export default Movie;
