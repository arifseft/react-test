import React from "react";
import styled from "@emotion/styled";

const Icon = ({condition}) => {
  const Container = styled.img`
	box-sizing: border-box;
    min-width: 0px;
    max-width: 100%;
    height: auto;
    width: 30%;
    margin: 0px;
  `;

  var icon = "";
  switch (condition) {
    case "Clear":
      icon = "./img/Mostly Sunny-2x.png";
      break;
    case "Clouds":
      icon = "./img/Mostly Cloudy-2x.png";
      break;
    case "Haze":
      icon = "./img/Haze-2x.png";
      break;
    case "Hail":
      icon = "./img/Hail-2x.png";
      break;
    case "Fog":
      icon = "./img/Fog-2x.png";
      break;
    case "Tornado":
      icon = "./img/Tornado-2x.png";
      break;
    case "Dust":
      icon = "./img/Dust-2x.png";
      break;
    case "Mist":
      icon = "./img/Fog-2x.png";
      break;
    case "Snow":
      icon = "./img/Snow-2x.png";
      break;
    case "Rain":
      icon = "./img/Rain-2x.png";
      break;
    case "Drizzle":
      icon = "./img/Drizzle-2x.png";
      break;
    case "Thunderstorm":
      icon = "./img/Severe Thunderstorm-2x.png";
      break;
    default:
      icon = "./img/Fog-2x.png";
      break;
  }

  return <Container src={icon} alt="Weather Icon"></Container>;
};

export default Icon;
