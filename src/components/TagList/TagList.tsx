import { TagItem, TagContainer } from "./styles";

export interface TagListProps {
  tags: string[];
  isMobile: boolean;
}

const TagList: React.FC<TagListProps> = (props) => {
  const numTags = props.isMobile ? 1 : 2;
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
