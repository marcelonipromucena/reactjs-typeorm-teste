import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import allActions from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(allActions.productAction.fetchProducts());
    console.log(products);
  }, []); 

  return (
    <Container>
      {products.map((product) => (

      <h1  key={product.id}>{product.name}</h1>
      ))}
    </Container>
  );
};

export default Home;
