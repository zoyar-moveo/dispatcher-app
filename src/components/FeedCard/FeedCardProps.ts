export interface FeedCardProps {
  text: {
    auther: string;
    title: string;
    descrition: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    cardImg: string;
  };
  onClickFuncy: () => void;
}
