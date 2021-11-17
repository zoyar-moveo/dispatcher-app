import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getSources() {
  console.log("hello in get sources");
  const sourcesObj = await axios.get(
    `https://newsapi.org/v2/top-headlines/sources?apiKey=${API_KEY}`
  );
  const sourcesNames = sourcesObj.data.sources.map((item: any) => {
    return { id: item.id, value: item.name };
  });
  console.log("sourcesNames", sourcesNames);
  return sourcesNames;
}

const API_DEFAULT_PARAMS = {
  apikey: API_KEY,
  country: "us",
};
const axios1 = axios.create({
  baseURL: "https://newsapi.org/v2",
});

async function makeGetRequest(filters: any = {}) {
  const filtersObj: { Sources: string; Country: string; Category: string } =
    filters.filter;
  let filterObj = {};
  if (filters)
    for (let [key, value] of Object.entries(filtersObj)) {
      if (value !== "")
        filterObj = { ...filterObj, [key.toLowerCase()]: value };
    }

  return axios1.get("/top-headlines", {
    params: { ...API_DEFAULT_PARAMS, ...filterObj },
  });
}

export default makeGetRequest;
