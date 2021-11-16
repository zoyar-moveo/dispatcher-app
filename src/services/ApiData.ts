import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const API_DEFAULT_PARAMS = {
  apikey: API_KEY,
  country: "us",
};
const axios1 = axios.create({
  baseURL: "https://newsapi.org/v2",
});

async function makeGetRequest(filters: any) {
  const filtersObj: { Sources: string; Country: string; Category: string } =
    filters.filter;
  let filterObj = {};

  for (let [key, value] of Object.entries(filtersObj)) {
    if (value !== "") filterObj = { ...filterObj, [key.toLowerCase()]: value };
  }

  return axios1.get("/top-headlines", {
    params: { ...API_DEFAULT_PARAMS, ...filterObj },
  });
}

export default makeGetRequest;
