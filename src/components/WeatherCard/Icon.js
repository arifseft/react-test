import React from "react";
import styled from "@emotion/styled";

const Icon = (props) => {
  const Container = styled.img`
    width: 40%;
  `;

  return (
    <Container
      src="./img/Hot_Sun_Day_3859136.png"
      alt="Weather Icon"
    ></Container>
  );
};

export default Icon;
