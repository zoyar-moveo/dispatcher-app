import ContentLoader from "react-content-loader";

const LineLoader = () => (
  <ContentLoader
    viewBox="0 0 400 100"
    width="420px"
    height="378px"
    backgroundColor="red"
    foregroundColor="red"
  >
    {/* <rect x="20" y="5" rx="0" ry="0" width="1" height="170" /> */}

    <rect x="40" y="60" rx="0" ry="0" width="120" height="100" />
    {/* <rect x="80" y="125" rx="0" ry="0" width="100" height="50" /> */}
    <rect x="110" y="40" rx="0" ry="0" width="100" height="120" />
    <rect x="150" y="30" rx="0" ry="0" width="60" height="140" />
    <rect x="200" y="40" rx="0" ry="0" width="60" height="100" />
    <rect x="240" y="10" rx="0" ry="0" width="80" height="160" />
    <rect x="320" y="40" rx="0" ry="0" width="80" height="100" />
  </ContentLoader>
);

export default LineLoader;
