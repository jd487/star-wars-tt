import axios from "axios";

export const getStarWarsTopTrumpData = async () => {
  const resp = await axios.get("https://swapi.dev/api/starships");
  return resp;
};
