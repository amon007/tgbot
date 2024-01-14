import axios from "axios";
import { config } from "./config.js";
export const get_weather = async (ctx) => {
    const response = await axios.get(config.weather_url);
    const text = `Temperature ${response.data.current.temp_c}°C`;
    return text;
}