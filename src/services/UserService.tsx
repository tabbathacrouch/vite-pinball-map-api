/* 
This application leverages the pinballmap API to find the nearest pinball locations given latitude and longitude. 
View docs here: https://pinballmap.com/api/v1/docs/1.0.html
*/
import axios from "axios";

interface locationByLatLonProps {
  lat: string;
  lon: string;
  send_all_within_distance?: string;
}

export async function getLocationByLatLon(body: locationByLatLonProps) {
  const URL = "https://pinballmap.com/api/v1/locations/closest_by_lat_lon";
  try {
    const res = await axios.get(URL, {
      params: body,
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return;
  }
}
