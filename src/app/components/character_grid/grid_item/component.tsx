import Character from "@/app/api/marvel/model/character";
import Styled from "./styled";
import Link from "next/link";

const Component = ({ 
    character
}: { 
    character: Character;
}) => {
    return (
        <Styled.GridItemArea>
            <Link href={`/character/${character.name}/`} style={Styled.ItemLink()}>
            <Styled.CharacterImage src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name ?? ""} />
            <Styled.CharacterName>{character.name}</Styled.CharacterName>
            </Link>
        </Styled.GridItemArea>
    );
};

export default Component;