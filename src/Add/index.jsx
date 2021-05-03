import React, { useContext, useState } from "react";
import { Container } from "./style";
import { Kino } from "../context";

const Add = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useContext(Kino);

  const onAdd = () => {
    console.log(name, price);
    setData((prev) => [
      ...prev,
      { id: data.length + 1, name: name, price: price },
    ]);
    setName("");
    setPrice("");
  };
  return (
    <Container>
      <input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </Container>
  );
};
export default Add;
