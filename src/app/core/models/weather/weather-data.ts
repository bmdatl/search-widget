export interface WeatherData {
  current_weather: {
    time: string;
    temperature: number;
    winddirection: number;
    windspeed: number;
  };
  latitude: number;
  longitude: number;
}
