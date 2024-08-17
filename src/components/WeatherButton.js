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
        <Button variant={active === "current" ? "danger" : "warning"} onClick={handleClick} value="current">현재위치</Button>
        {cities.map((item, index) => (
          <Button variant={item.value === active ? "danger" : "warning"} key={index} onClick={handleClick} value={item.value}>{item.name}</Button>
        ))}
    </ButtonContainer>
  )
}

export default WeatherButton;