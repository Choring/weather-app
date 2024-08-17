import React, { useState } from 'react'
import {Button} from "react-bootstrap";
import ButtonContainer from '../style/ButtonContainer';

const WeatherButton = ({cities, setCity}) => {

  return (
    <ButtonContainer>
        <Button variant="warning">Current Location</Button>
        {cities.map((item, index) => (
          <Button variant="warning" key={index} onClick={() => setCity(item)}>{item}</Button>
        ))}
    </ButtonContainer>
  )
}

export default WeatherButton;