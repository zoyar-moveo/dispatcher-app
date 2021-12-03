import React, { FC } from "react";
import ContentLoader from "react-content-loader";

const MyLoader: FC = () => (
  <>
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      viewBox="0 0 476 124"
      backgroundColor="#a71818"
      foregroundColor="#9c3030"
    >
      <rect x="180" y="15" rx="3" ry="3" width="103" height="7" />
      <rect x="180" y="39" rx="3" ry="3" width="61" height="7" />
      <rect x="180" y="66" rx="3" ry="3" width="335" height="7" />
      <rect x="180" y="88" rx="3" ry="3" width="335" height="7" />
      <rect x="9" y="11" rx="5" ry="5" width="120" height="140" />
    </ContentLoader>
  </>
);

export default MyLoader;
