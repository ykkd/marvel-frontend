import Character from "@/api/marvel/model/character";
import Styled from "./styled";
import Link from "next/link";

const Component = ({
  character,
  lastItemRef,
}: {
  character: Character;
  lastItemRef?: (node: HTMLDivElement | null) => void;
}) => {
  return (
    <Styled.GridItemArea ref={lastItemRef}>
      <Link
        href={`/character/${character.id}`}
        style={Styled.ItemLink()}
        passHref
      >
        <Styled.CharacterImageWrapper>
          <Styled.CharacterImage
            src={
              character.thumbnail.path +
              "/standard_fantastic" +
              "." +
              character.thumbnail.extension
            }
            alt={character.name ?? ""}
          />
          <Styled.CharacterName>{character.name}</Styled.CharacterName>
        </Styled.CharacterImageWrapper>
      </Link>
    </Styled.GridItemArea>
  );
};

export default Component;
