import { TagItem, TagContainer } from "./styles";

export interface TagListProps {
  text: string;
}

const TagList: React.FC<TagListProps> = (props) => {
  return (
    <TagContainer>
      <TagItem>China </TagItem>
      <TagItem>China </TagItem>
      <TagItem>+2 </TagItem>
    </TagContainer>
  );
};

export default TagList;
