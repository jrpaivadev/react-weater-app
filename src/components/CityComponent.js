import React from "react";
import { TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <img src={"/react-weather-app/icons/img_logo.png"} alt="logo" width={"200px"}></img>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>Digite sua cidade</Typography>
      </Grid>
      <Grid item xs={12}>
        <form autoComplete="off" onSubmit={fetchWeather}>
            <TextField
              onChange={(e) => updateCity(e.target.value)}
              label="Cidade"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" color="primary" type={"submit"}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </form>
      </Grid>
    </Grid>
  );
};
export default CityComponent;
