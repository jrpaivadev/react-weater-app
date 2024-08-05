import React, { useState } from "react";
import Container from '@mui/material/Container';
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";
import './App.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';


export const WeatherIcons = {
  "01d": "/react-weather-app/icons/sunny.svg",
  "01n": "/react-weather-app/icons/night.svg",
  "02d": "/react-weather-app/icons/day.svg",
  "02n": "/react-weather-app/icons/cloudy-night.svg",
  "03d": "/react-weather-app/icons/cloudy.svg",
  "03n": "/react-weather-app/icons/cloudy.svg",
  "04d": "/react-weather-app/icons/perfect-day.svg",
  "04n": "/react-weather-app/icons/cloudy-night.svg",
  "09d": "/react-weather-app/icons/rain.svg",
  "09n": "/react-weather-app/icons/rain-night.svg",
  "10d": "/react-weather-app/icons/rain.svg",
  "10n": "/react-weather-app/icons/rain-night.svg",
  "11d": "/react-weather-app/icons/storm.svg",
  "11n": "/react-weather-app/icons/storm.svg",
};

const useStyles = makeStyles((theme) => ({
  centerColumn: {
    height: 100
  }
}));

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const classes = useStyles();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ae79b68e928fe509a38eda49d890145b`,
    );
    updateWeather(response.data);
  };
  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader title="REACT WEATER APP"></CardHeader>
        <CardContent>
          <Grid 
            xs={12}
            container 
            spacing={2}
            direction="column"
      alignItems="center"
      justify="center"
          >
            {city && weather ? (
              <Grid 
                item 
                xs={12}
                className={classes.centerColumn}
                direction="column"
                justify="center"
              >
                <WeatherComponent weather={weather} city={city} />
              </Grid>
            ) : (
              <Grid item xs={12}>
                <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
              </Grid>
            )}
        </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
