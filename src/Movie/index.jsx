import React, { useContext } from "react";
import { Container } from "./style";
import { Kino } from "../context";
const Movie = ({ value }) => {
  const [data, setData] = useContext(Kino);

  const onDelete = (e) => {
    setData((prev) =>
      prev.filter((value) => {
        return value.id !== e;
      })
    );
  };
  return (
    <Container>
      <div>
        <h1>Kino nomi :{value.name} </h1>
        <h1>Kino narxi : {value.price} </h1>
        <button onClick={() => onDelete(value.id)}>Delete</button>
        <hr />
      </div>
    </Container>
  );
};
export default Movie;
