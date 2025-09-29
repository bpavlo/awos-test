import axios from 'axios';

export async function getWeather(city: string): Promise<void> {
  try {
    const response = await axios.get(`https://wttr.in/${city}?format=j1`);
    const weather = response.data;

    console.log(`Weather in ${weather.nearest_area[0].areaName[0].value}:`);
    console.log(`- Temperature: ${weather.current_condition[0].temp_C}°C`);
    console.log(`- Weather: ${weather.current_condition[0].weatherDesc[0].value}`);
    console.log(`- Wind: ${weather.current_condition[0].windspeedKmph} km/h`);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching weather:', error.message);
    } else {
      console.error('An unknown error occurred while fetching the weather.');
    }
  }
}
