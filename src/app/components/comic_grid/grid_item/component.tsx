// grid_item/component.tsx
import Styled from "./styled";
import Comic from "@/api/marvel/model/comic";
import DOMPurify from "dompurify";

interface ComponentProps {
  comic: Comic;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}

const Component = ({ comic, lastItemRef }: ComponentProps) => {
  const sanitizeText = (text: string) => DOMPurify.sanitize(text, { ALLOWED_TAGS: [] });

  return (
    <Styled.GridItemArea ref={lastItemRef}>
        <Styled.ComicImageContainer>
          <Styled.ComicImage
            src={`${comic.thumbnail.path}/portrait_incredible.${comic.thumbnail.extension}`}
            alt={comic.title ?? ""}
          />
        </Styled.ComicImageContainer>
        <Styled.ComicInfoContainer>
          <Styled.ComicTitle>
            {comic.title}
          </Styled.ComicTitle>
          <Styled.ComicDescription>
            {comic.textObjects && comic.textObjects.length > 0
              ? sanitizeText(comic.textObjects[0].text)
              : "No description found."}
          </Styled.ComicDescription>
        </Styled.ComicInfoContainer>
    </Styled.GridItemArea>
  );
};

export default Component;
