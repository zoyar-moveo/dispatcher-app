import moment from "moment";

export interface articleObj {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

const getSourcesMap =
  //   (articles: articleObj[]
  // ): { labels: string[]; dataSetData: number[] } => {

  (articles: any) => {
    let allLabels = articles.map((article: any) => article.source.name);
    const occurrences = allLabels.reduce(function (acc: any, curr: any) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    return {
      labels: Object.keys(occurrences),
      dataSetData: Object.values(occurrences),
    };
  };

export default getSourcesMap;

export const getDatesMap = (articles: any) => {
  let allDates = articles.map((article: any) => article.publishedAt);
  // console.log(allDates);
  let allDatesSorted = allDates.slice().sort((first: any, second: any) => {
    return (
      new Date(first.publishedAt).getTime() -
      new Date(second.publishedAt).getTime()
    );
  });
  // console.log(allDatesSorted);

  const occurrences = allDatesSorted.reduce(function (acc: any, curr: any) {
    let date = moment(curr).format("DD/MM/YYYY");
    console.log(date);
    return acc[date] ? ++acc[date] : (acc[date] = 1), acc;
  }, {});
  return {
    months: Object.keys(occurrences),
    dataSetData: Object.values(occurrences),
  };
};
