import { TagItem, TagContainer } from "./styles";
// import { FeedCardProps } from "./FeedCardProps";

export interface TagListProps {
  text: string;
}

const TagList: React.FC<TagListProps> = (props) => {
  return (
    <TagContainer>
      <TagItem>China</TagItem>
      <TagItem>China</TagItem>
      <TagItem>China</TagItem>
    </TagContainer>
  );
};

export default TagList;
