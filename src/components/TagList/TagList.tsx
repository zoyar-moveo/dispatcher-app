import { TagItem, TagContainer } from "./styles";

export interface TagListProps {
  tags: string[];
}

const TagList: React.FC<TagListProps> = (props) => {
  return (
    <TagContainer>
      {props.tags.map((tag, idx) => {
        return idx < 2 && <TagItem key={idx}>{tag}</TagItem>;
      })}
      <TagItem>+{props.tags.length - 2}</TagItem>
    </TagContainer>
  );
};

export default TagList;
