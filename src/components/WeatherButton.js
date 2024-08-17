import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import ButtonContainer from '../style/ButtonContainer';

const WeatherButton = ({cities, setCity}) => {
  const [active, setActive] = useState("current");

  const handleClick = (e) => {
    e.target.value === "current" ? setCity("current") : setCity(e.target.value);
    setActive(() => {
      return e.target.value
    })
    
  }

  return (
    <ButtonContainer>
        <Button variant={active === "current" ? "danger" : "warning"} onClick={handleClick} value="current">Current Location</Button>
        {cities.map((item, index) => (
          <Button variant={item === active ? "danger" : "warning"} key={index} onClick={handleClick} value={item}>{item}</Button>
        ))}
    </ButtonContainer>
  )
}

export default WeatherButton;