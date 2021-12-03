import React from "react";
import ContentLoader from "react-content-loader";

const SourceLoader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 200 200"
    backgroundColor="red"
    foregroundColor="red"
  >
    <circle cx="98" cy="36" r="35" />
    <circle cx="603" cy="235" r="158" />
    <circle cx="43" cy="86" r="4" />
    <rect x="53" y="83" rx="0" ry="0" width="30" height="6" />
    <circle cx="44" cy="100" r="4" />
    <rect x="54" y="97" rx="0" ry="0" width="30" height="6" />
    <circle cx="43" cy="101" r="4" />
    <circle cx="44" cy="115" r="4" />
    <rect x="54" y="112" rx="0" ry="0" width="30" height="6" />
    <rect x="132" y="82" rx="0" ry="0" width="15" height="6" />
    <rect x="133" y="96" rx="0" ry="0" width="15" height="6" />
    <rect x="134" y="111" rx="0" ry="0" width="15" height="6" />
  </ContentLoader>
);

export default SourceLoader;
