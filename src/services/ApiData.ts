import axios from "axios";
const _ = require("lodash");
const API_KEY = process.env.REACT_APP_API_KEY;

const API_DEFAULT_PARAMS = {
  apikey: API_KEY,
  country: "us",
};
const axios1 = axios.create({
  baseURL: "https://newsapi.org/v2",
});

export async function getSources() {
  const sourcesObj = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
  );
  const sourcesNames = sourcesObj.data.sources.map((item: any) => {
    return { id: item.id, value: item.name };
  });
  return sourcesNames;
}

async function makeGetRequest(filters: {
  filter: {
    Source: string;
    Country: string;
    Category: string;
  };
}) {
  const filtersObj: { Source: string; Country: string; Category: string } =
    filters.filter;
  let filterObj = {};
  for (let [key, value] of Object.entries(filtersObj!)) {
    if (value !== "") filterObj = { ...filterObj, [key.toLowerCase()]: value };
  }
  const res = axios1.get("/top-headlines", {
    params: { ...API_DEFAULT_PARAMS, ...filterObj },
  });
  return res;
}

export default makeGetRequest;
