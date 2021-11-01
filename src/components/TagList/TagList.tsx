import { TagItem, TagContainer } from "./styles";

export interface TagListProps {
  tags: string[];
  isMobile: boolean;
}

const TagList: React.FC<TagListProps> = (props) => {
  const MAX_TAG_NUMBER_LARGE_SCREEN = 2;
  const MAX_TAG_NUMBER_MOBILE = 1;

  const numTags = props.isMobile
    ? MAX_TAG_NUMBER_MOBILE
    : MAX_TAG_NUMBER_LARGE_SCREEN;
  return (
    <TagContainer>
      {props.tags.map((tag, idx) => {
        return idx < numTags && <TagItem key={idx}>{tag}</TagItem>;
      })}
      <TagItem>+{props.tags.length - numTags}</TagItem>
    </TagContainer>
  );
};

export default TagList;
