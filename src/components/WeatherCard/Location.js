import React from "react";
import styled from "@emotion/styled";

const Location = ({ city, country }) => {
  const Container = styled.div`
    text-align: center;
    box-sizing: border-box;
    min-width: 0px;
    margin: 0px;
  `;

  const City = styled.h1`
    box-sizing: border-box;
    min-width: 0px;
    font-family: Merriweather, sans-serif;
    line-height: 1.25;
    font-weight: 700;
    color: var(--theme-ui-colors-text, hsl(210, 50%, 96%));
    letter-spacing: -0.05em;
    font-size: 24px;
    position: relative;
    margin: 0px;
    text-decoration: none;
  `;

  const Country = styled.h3`
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
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
