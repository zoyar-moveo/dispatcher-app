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

const getSourcesMap = (
  articles: articleObj[]
): { labels: string[]; dataSetData: number[] } => {
  let allLabels = articles.map((article) => article.source.name);
  const occurrences = allLabels.reduce(function (acc: any, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});
  return {
    labels: Object.keys(occurrences),
    dataSetData: Object.values(occurrences),
  };
};

export default getSourcesMap;
