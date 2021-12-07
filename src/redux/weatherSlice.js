const { createSlice } = require('@reduxjs/toolkit');

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    isLoading: false,
    isError: false,
    weatherData: null,
  },
  reducers: {
    loadWeatherData: (state) => {
      state.isLoading = true;
    },
    setWeatherData: (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.weatherData = action.payload;
    },
    loadingFailed: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { loadWeatherData, setWeatherData, loadingFailed } =
  weatherSlice.actions;

export default weatherSlice.reducer;
