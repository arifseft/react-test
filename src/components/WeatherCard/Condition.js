import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp, condition }) => {
  const Temp = styled.h1`
	box-sizing: border-box;
    min-width: 0px;
    font-family: "Fira Sans", sans-serif;
    font-size: 32px;
    color: var(--theme-ui-colors-text,hsl(210,50%,96%));
    margin: 0px;
  `;

  const State = styled.h3`
	box-sizing: border-box;
    min-width: 0px;
    font-family: "Fira Sans", sans-serif;
    line-height: 1;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: var(--theme-ui-colors-text,hsl(210,50%,96%));
    text-transform: uppercase;
    font-size: 16px;
    margin: 0px;
    text-decoration: none;
  `;
  return (
    <>
      <Temp>{temp} °C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
