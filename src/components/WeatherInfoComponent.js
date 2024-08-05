import React from "react";
import styled from "styled-components";
import { WeatherIcons } from "../App";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export const WeatherInfoIcons = {
    sunset: "/react-weather-app/icons/temp.svg",
    sunrise: "/react-weather-app/icons/temp.svg",
    humidity: "/react-weather-app/icons/humidity.svg",
    wind: "/react-weather-app/icons/wind.svg",
    pressure: "/react-weather-app/icons/pressure.svg",
};

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;

const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
      <Card sx={{ minWidth: 100 }}>
        <CardContent>
          <InfoIcon src={WeatherInfoIcons[name]}/>
          <Typography variant="h6" gutterBottom>{value}</Typography>
          <Typography variant="subtitle1" gutterBottom>{name}</Typography>
        </CardContent>
      </Card>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>{`${Math.floor(weather?.main?.temp - 273)}°C |  ${weather?.weather[0].description}`}</Typography>
          <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]}/>
        </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>{`${weather?.name}, ${weather?.sys?.country}`}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Informação do tempo</Typography>
          </Grid>
          <Grid item xs={6}>
            <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
          </Grid>
          <Grid item xs={6}>
            <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
          </Grid>
          <Grid item xs={6}>
            <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
          </Grid>
          <Grid item xs={6}>
            <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
};

export default WeatherComponent;
