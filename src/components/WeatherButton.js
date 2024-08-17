import React from 'react'
import {Button} from "react-bootstrap";
import ButtonContainer from '../style/ButtonContainer';

const WeatherButton = () => {
  return (
    <ButtonContainer>
        <Button variant="warning">Current Location</Button>
        <Button variant="warning">Paris</Button>
        <Button variant="warning">London</Button>
    </ButtonContainer>
  )
}

export default WeatherButton