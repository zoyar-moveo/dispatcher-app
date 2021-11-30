import axios from "axios";
const _ = require("lodash");
// const API_KEY = "BLA BLD";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getSources() {
  const sourcesObj = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
  );
  const sourcesNames = sourcesObj.data.sources.map((item: any) => {
    return { id: item.id, value: item.name };
  });
  return sourcesNames;
}
const API_DEFAULT_PARAMS = {
  apikey: API_KEY,
  pageSize: 10,
};

const axios1 = axios.create({
  baseURL: "https://newsapi.org/v2",
});

async function makeGetRequest(
  filters: {
    filter: {
      Sources: string;
      Country: string;
      Category: string;
    };
    searchQ: string;
  },
  endPoint: any
) {
  let filtersObj: any;
  filtersObj = filters.filter;
  let filterObj = {};
  for (let [key, value] of Object.entries(filtersObj!)) {
    if (value !== "") filterObj = { ...filterObj, [key.toLowerCase()]: value };
  }
  if (filters.searchQ) filterObj = { ...filterObj, q: filters.searchQ };
  const res = axios1.get("/top-headlines", {
    params: { ...API_DEFAULT_PARAMS, ...filterObj },
  });
  return res;
}

export default makeGetRequest;

export async function makeGetRequestEvery(filtersEvery: {
  filter: {
    Sources: string;
    Language: string;
    Dates: string[];
  };
  searchQ: string;
}) {
  let filtersObj = filtersEvery.filter;
  let filterObj = {};
  for (let [key, value] of Object.entries(filtersObj!)) {
    if (value !== "" && key !== "Dates")
      filterObj = { ...filterObj, [key.toLowerCase()]: value };
    if (key === "Dates" && value.length !== 0) {
      filterObj = { ...filterObj, from: value[0], to: value[1] };
    }
  }
  if (filtersEvery.searchQ)
    filterObj = { ...filterObj, q: filtersEvery.searchQ };
  const res = axios1.get("/everything", {
    params: { ...API_DEFAULT_PARAMS, ...filterObj },
  });
  return res;
}
