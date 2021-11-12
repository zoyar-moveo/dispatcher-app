export {};
const axios = require("axios");

const API_KEY = process.env.REACT_APP_API_KEY;

// const FetchData: React.FC = () => {
// const getData = () => {
//   const url = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`;
//   async function makeGetRequest() {
//     let res = await axios.get(url);
//     let data = res.data;
//     return data;
//   }
//   makeGetRequest();
// };
// getData();
// const newsApi = axios.create({
//   baseUrl: "https://newsapi.org",
// });
// export const getNews = async () => {
//   return await newsApi.get(
//     "v2/top-headlines?language=en&apiKey=${API_KEY}"
//   );
// };
// };

// export default FetchData;
