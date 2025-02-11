import Comic from "@/api/marvel/model/comic";
import GridItem from "./grid_item";
import Styled from "./styled";

const Component = ({
  comics,
  lastItemRef,
}: {
  comics: Comic[];
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return (
    <Styled.ComicList>
      {!!comics &&
        comics.map((comic, index) => (
          <GridItem
            key={comic.id}
            comic={comic}
            lastItemRef={index === comics.length - 1 ? lastItemRef : undefined}
          />
        ))}
    </Styled.ComicList>
  );
};

export default Component;
