import { useState, useEffect } from 'react';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";
// 1. 앱이 실행되자마자 현재 위치기반의 날씨 제공
// 2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태 정보 제공
// 3. 5개의 버튼이 있다.(1개는 현재도시, 4개는 다른도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재위치 버튼을 누르면 다시 현재우치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너를 돈다.


function App() {
  const [weather, setWeather] = useState(null);
  const cities = [{value:"paris", name:"파리"}, {value:"new york", name:"뉴욕"}, {value:"tokyo", name:"도쿄"}, {value:"seoul", name:"서울"}];
  const [city, setCity] = useState("current");
  const [loading, setLoading] = useState(true);
  let [handleError, setHandleError] = useState("");

  const getCurrentLocation= () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0bedb45c75711fa3349b7114b5743974&units=metric&lang=kr`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setHandleError(error);
      setLoading(false);
    }
    
  }

  const getWeatherByCity = async() => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bedb45c75711fa3349b7114b5743974&units=metric&lang=kr `;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (error) {
      setHandleError(error);
      setLoading(false);
    }
    
  }

  useEffect(() => {
    city === "current" ? getCurrentLocation() : getWeatherByCity();
  },[city]);

  return (
    <>
    {(handleError == "" ) ? 
      <div className="container">
        <WeatherButton cities={cities} setCity={setCity} />
        <div className="weather-container">
          {loading ? 
            <div className="loading-box">
              <ClipLoader
              color={"#f88c6b"}
              loading={loading}
              size={150}
              />
            </div>
             :
            <WeatherBox weather={weather} />
          }
        </div>
      </div>
    : <h3>{handleError}</h3>}
    </>
  );
}

export default App;
