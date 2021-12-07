import React from "react";
import ContentLoader from "react-content-loader";

const SourceLoader = () => (
  <ContentLoader
    speed={2}
    // width="410px"
    width="100%"
    height="378px"
    viewBox="0 0 200 150"
    // viewBox="0 0 200 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#888888dc"
  >
    <circle cx="98" cy="36" r="25" />
    <circle cx="43" cy="86" r="2" />
    <circle cx="43" cy="101" r="2" />
    <circle cx="43" cy="116" r="2" />
    <circle cx="43" cy="131" r="2" />
    <rect x="54" y="83" rx="0" ry="0" width="30" height="6" />
    <rect x="54" y="97" rx="0" ry="0" width="30" height="6" />
    <rect x="54" y="112" rx="0" ry="0" width="30" height="6" />
    <rect x="54" y="127" rx="0" ry="0" width="30" height="6" />
    <rect x="150" y="83" rx="0" ry="0" width="15" height="6" />
    <rect x="150" y="97" rx="0" ry="0" width="15" height="6" />
    <rect x="150" y="112" rx="0" ry="0" width="15" height="6" />
    <rect x="150" y="127" rx="0" ry="0" width="15" height="6" />
  </ContentLoader>
);

export default SourceLoader;
