import axios from "axios";
import { config } from "./config.js";
export const get_cat = async () => {
    const response = await axios.get(config.cat_url);
    return response.data[0].url;
}
